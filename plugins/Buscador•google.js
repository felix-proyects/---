import fs from 'fs'
import path from 'path'

var handler = async (m, { conn, isPrems }) => {
  let text = `Está es la prueba de la lógica de botones mia`

  const buttons = [
    {
      buttonId: `#menu`,
      buttonText: { displayText: "Comandos" },
      type: 1
    }
  ];

  conn.sendMessage(m.chat, { text, buttons }, { quoted: m })
}

handler.help = ['prueba2']
handler.tags = ['main']
handler.command = ['buttons']

export default handler