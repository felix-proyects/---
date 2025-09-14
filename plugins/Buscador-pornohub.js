import fs from 'fs'
import path from 'path'

var handler = async (m, { conn, isPrems }) => {
  let text = `「✿」El codigo va bien`
  const buttons = [
    {
      buttonId: `#memev`,
      buttonText: {
        displayText: "✿ Ver más ✿"
      },
      type: 1
    }
  ];

  await conn.sendMessage(
    m.chat,
    {
      text,
      buttons,
      viewOnce: true
    },
    { quoted: m }
  );
};

handler.help = ['prueba2']
handler.tags = ['main']
handler.command = ['dev']

export default handler