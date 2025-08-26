let handler = async (m, { conn }) => {
  try {
    let nombre = await conn.getName(m.sender)
    let devby = `𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓭 𝓫𝔂 𝐃𝐞𝐲𝐦𝐨𝐨𝐧-𝐨𝐟𝐜 ❤️ | ${nombre}`
    let botname = 'Makima'
    let tipo = 'ofc'
    let menu = `𝐇𝐨𝐥𝐚, 𝐒𝐨𝐲 *${botname}* *[${tipo}]*

Aǫᴜɪ ᴇsᴛᴀ ʟᴀ ʟɪsᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs: 
╭━𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓭 𝓫𝔂 𝐃𝐞𝐲𝐦𝐨𝐨𝐧-𝐨𝐟𝐜 ❤️
┃Cᴏᴍᴀɴᴅᴏs ꨄ︎
┃deymoon-club.vercel.app/
┃Cᴀɴᴀʟ ᴏғᴄ ❦︎
┃https://whatsapp.com/channel/0029Vb5nxWWFHWq5CNFP5b21
╰━━━━━━━━━━
> C𝚛a 𝚄n Subbot con tu número de telefono usando #qr o #code

...(el resto de tu menú aquí)...
`

    await conn.sendMessage(m.chat, {
      text: menu,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          title: devby,
          sourceUrl: 'https://deymoon-club.vercel.app/',
          mediaType: 1,
          renderLargerThumbnail: true,
          thumbnailUrl: 'https://qu.ax/XkPVZ.jpg', // opcional, solo para que salga preview
        }
      }
    }, { quoted: m })

    await m.react('🩵')
  } catch (e) {
    await m.reply(`✘ Ocurrió un error cuando la lista de comandos se iba a enviar.\n\n${e}`, m)
    await m.react('❌')
  }
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'help', 'menú', 'asistenciabot', 'comandosbot', 'listadecomandos', 'menucompleto']
handler.register = true

export default handler