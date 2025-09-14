import fs from 'fs'
import path from 'path'

var handler = async (m, { conn, isPrems }) => {
  let text = `「✿」El código va bien`
  // Foto principal (puedes poner el link que quieras)
  let mainPhoto = 'https://i.imgur.com/8fK4h6F.jpeg' // Foto grande
  // Miniatura o cuadro pequeño (también puedes cambiar el link)
  let thumbnailLink = 'https://i.imgur.com/5RjB2vF.jpeg' // Foto pequeña

  await conn.sendMessage(m.chat, {
    image: { url: mainPhoto },
    caption: text,
    jpegThumbnail: await (await fetch(thumbnailLink)).arrayBuffer(),
  }, { quoted: m })
}

handler.help = ['prueba2']
handler.tags = ['main']
handler.command = ['dev']

export default handler