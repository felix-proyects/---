/* Código modificado por felix ofc
No quites los créditos
*/

import fetch from "node-fetch"
import yts from "yt-search"
import axios from "axios"

const youtubeRegexID = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/

const handler = async (m, { conn, text, command }) => {
  let user = global.db.data.users[m.sender]

  if (user.chocolates < 2) {
    return conn.reply(m.chat, `☆ Necesitas 2 Diamantes para poder usar este comando.`, m, fake)
  }

  try {
    if (!text?.trim()) {
      return conn.reply(m.chat, "✩ Ingresa el link o nombre de la música/video a descargar.", m, fake)
    }

    let videoIdToFind = text.match(youtubeRegexID) || null
    let ytplay2 = await yts(videoIdToFind === null ? text : "https://youtu.be/" + videoIdToFind[1])

    if (videoIdToFind) {
      const videoId = videoIdToFind[1]
      ytplay2 = ytplay2.all.find(item => item.videoId === videoId) || ytplay2.videos.find(item => item.videoId === videoId)
    }

    ytplay2 = ytplay2.all?.[0] || ytplay2.videos?.[0] || ytplay2

    if (!ytplay2 || ytplay2.length === 0) {
      return m.reply("✧ No se encontraron resultados para tu búsqueda.")
    }

    let { title, thumbnail, timestamp, views, ago, url, author } = ytplay2
    title = title || "Desconocido"
    thumbnail = thumbnail || ""
    timestamp = timestamp || "Desconocido"
    views = views || "No disponible"
    ago = ago || "No disponible"
    url = url || ""
    author = author || { name: "Desconocido" }

    const vistas = formatViews(views)
    const canal = author.name || "Desconocido"

    const infoMessage = `
*.╭╭ִ╼࣪━ִDESCARGANDO━ִ╾࣪╮╮.*
> ♡ *Título:* ${title}
> ♡ *Duración:* ${timestamp}
> ♡ *Vistas:* ${vistas}
> ♡ *Canal:* ${canal}
> ♡ *Publicado:* ${ago}
> ♡ *Link:* ${url}
*⏝ּׅ︣︢ۛ۫۫۫۫۫۫ۜ⏝ּׅ︣︢ۛ۫۫۫۫۫۫ۜ*`

    const thumb = (await conn.getFile(thumbnail))?.data

    const JT = {
      contextInfo: {
        externalAdReply: {
          title: botname,
          body: dev,
          mediaType: 1,
          previewType: 0,
          mediaUrl: url,
          sourceUrl: "https://youtube.com",
          thumbnail: thumb,
          renderLargerThumbnail: true,
        },
      },
    }

    await conn.reply(m.chat, infoMessage, m, JT)

    const isAudio = ["play", "mp3", "playaudio"].includes(command)
    const isVideo = ["play2", "mp4", "playvideo"].includes(command)

    if (!isAudio && !isVideo) {
      return conn.reply(m.chat, "⚠︎ Comando no reconocido.", m, fake)
    }

    const format = isAudio ? "audio" : "video"
    const apiUrl = `https://myapiadonix.casacam.net/download/yt?url=${encodeURIComponent(url)}&format=${format}`
    const res = await fetch(apiUrl)
    const json = await res.json()

    if (!json.status || !json.data?.url) {
      throw new Error(json.message || "No se pudo obtener el enlace de descarga.")
    }

    const downloadUrl = json.data.url

    if (isAudio) {
      await conn.sendMessage(
        m.chat,
        {
          audio: { url: downloadUrl },
          mimetype: "audio/mpeg",
          fileName: `${title}.mp3`,
          ptt: true,
        },
        { quoted: m }
      )
    } else if (isVideo) {
      await conn.sendMessage(
        m.chat,
        {
          video: { url: downloadUrl },
          mimetype: "video/mp4",
          fileName: `${title}.mp4`,
          caption: "❏ Descarga completa, aquí tienes tu video.",
        },
        { quoted: m }
      )
    }

    user.chocolates -= 2
    conn.reply(m.chat, `☆ Utilizaste 2 *Diamantes*`, m)
  } catch (error) {
    console.error("[ERROR YOUTUBE]", error)
    return m.reply(`⚠︎ Ocurrió un error: ${error.message || error}`)
  }
}

handler.command = handler.help = ["play", "mp3", "playaudio", "play2", "mp4", "playvideo"]
handler.tags = ["downloader"]

export default handler

function formatViews(views) {
  if (views === undefined) return "No disponible"
  if (views >= 1_000_000_000) return `${(views / 1_000_000_000).toFixed(1)}B (${views.toLocaleString()})`
  if (views >= 1_000_000) return `${(views / 1_000_000).toFixed(1)}M (${views.toLocaleString()})`
  if (views >= 1_000) return `${(views / 1_000).toFixed(1)}k (${views.toLocaleString()})`
  return views.toString()
}