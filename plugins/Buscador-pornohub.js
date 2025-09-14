import fs from 'fs'
import path from 'path'

var handler = async (m, { conn, isPrems }) => {
  let text = `「✿」El codigo va bien`
  let image = fs.readFileSync(path.join(__dirname, 'ruta/a/la/imagen.jpg')) // Reemplaza con la ruta de tu imagen

  conn.sendMessage(m.chat, {
    image: image,
    caption: text,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: 'tuNewsletterJid', // Reemplaza con el JID de tu newsletter
        newsletterName: 'tuNombreDeNewsletter', // Reemplaza con el nombre de tu newsletter
        serverMessageId: ''
      }
    }
  }, { quoted: m })
}

handler.help = ['prueba2']
handler.tags = ['main']
handler.command = ['exito']

export default handler