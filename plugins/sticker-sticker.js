import { sticker } from '../lib/sticker.js'
//import uploadFile from '../lib/uploadFile.js'
//import uploadImage from '../lib/uploadImage.js'
//import { webp2png } from '../lib/webp2mp4.js'

// Edita aquí los textos/letras que quieras mostrar en los stickers.
// Puedes agregar, cambiar o quitar las claves y valores según lo que necesites.
// Ejemplo: para usar el sticker con la letra A, escribe: .sticker A
const stickerLetters = {
  A: "Letra personalizada A",
  B: "Letra personalizada B",
  C: "Letra personalizada C",
  D: "Letra personalizada D",
  E: "Letra personalizada E",
  // Agrega más letras o palabras aquí
}

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 8) return m.reply(`☆ *¡El video no puede durar mas de 8 segundos!*`)
      let img = await q.download?.()
      if (!img) return conn.reply(m.chat, `☆ *_Responde a un vídeo, imagen o Gif para generar tu sticker._*`, m, fake)

      // Toma la letra/texto del segundo argumento (args[1]), busca en el objeto stickerLetters
      // Si no hay argumento o no existe, usa el packsticker global
      let letra = args[1] ? stickerLetters[args[1].toUpperCase()] : ""
      let out
      try {
        stiker = await sticker(img, false, letra || global.packsticker, global.author)
      } catch (e) {
        console.error(e)
      } finally {
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img)
          else if (/image/g.test(mime)) out = await uploadImage(img)
          else if (/video/g.test(mime)) out = await uploadFile(img)
          if (typeof out !== 'string') out = await uploadImage(img)
          stiker = await sticker(false, out, letra || global.packsticker, global.author)
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], stickerLetters[args[1]?.toUpperCase()] || global.packsticker, global.author)
      else return m.reply(`☆ El url es incorrecto`)
    }
  } catch (e) {
    console.error(e)
    if (!stiker) stiker = e
  } finally {
    if (stiker) {
      conn.sendFile(
        m.chat,
        stiker,
        'sticker.webp',
        '',
        m,
        true,
        {
          contextInfo: {
            'forwardingScore': 200,
            'isForwarded': false,
            externalAdReply: {
              showAdAttribution: false,
              title: packname,
              body: `☆ Deymoon Club ☆`,
              mediaType: 2,
              sourceUrl: redes,
              thumbnail: icons
            }
          }
        },
        { quoted: m }
      )
    } else {
      return conn.reply(m.chat, '☆ *_Debes responder a un Video, Foto o Gif, para generar su sticker._*', m, fake)
    }
  }
}

handler.help = ['stiker <img>', 'sticker <url>']
handler.tags = ['sticker']
handler.group = false;
handler.register = true
handler.command = ['s', 'sticker', 'stiker']

export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}