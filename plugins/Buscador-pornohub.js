import fs from 'fs'
import path from 'path'

var handler = async (m, { conn, isPrems }) => {
  let text = `「✿」El codigo va bien`
  conn.reply(m.chat, text, m, fake)
}

    const buttons = [
        {
      buttonId: `#memev`,
      buttonText: {
        displayText: "✿ Ver más ✿"
      },
      type: 1
    }

    ];

handler.help = ['prueba2']
handler.tags = ['main']
handler.command = ['dev']

export default handler