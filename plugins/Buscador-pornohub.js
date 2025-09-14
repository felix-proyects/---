import fs from 'fs'
import path from 'path'

var handler = async (m, { conn, isPrems }) => {
  let text = `Botones Del Bot`
  const buttons = [
    {
      buttonId: `#reg Deymoon.18`,
      buttonText: {
        displayText: "✿ Auto Registrar ✿"
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

handler.help = ['boton <opción>']
handler.tags = ['main']
handler.command = ['buttons', 'botones']

export default handler