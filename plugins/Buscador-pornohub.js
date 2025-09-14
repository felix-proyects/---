import fs from 'fs'
import path from 'path'

const menu = {
  text: `「✿」Elige una opción`,
  buttons: [
    {
      buttonId: `#opcion1`,
      buttonText: {
        displayText: "Opción 1"
      },
      type: 1
    },
    {
      buttonId: `#opcion2`,
      buttonText: {
        displayText: "Opción 2"
      },
      type: 1
    },
    {
      buttonId: `#opcion3`,
      buttonText: {
        displayText: "Opción 3"
      },
      type: 1
    }
  ]
};

const opciones = {
  '#opcion1': async (m, { conn }) => {
    await conn.reply(m.chat, 'Has elegido la opción 1')
  },
  '#opcion2': async (m, { conn }) => {
    await conn.reply(m.chat, 'Has elegido la opción 2')
  },
  '#opcion3': async (m, { conn }) => {
    await conn.reply(m.chat, 'Has elegido la opción 3')
  }
};

var handler = async (m, { conn, isPrems }) => {
  await conn.sendMessage(
    m.chat,
    {
      text: menu.text,
      buttons: menu.buttons,
      viewOnce: true
    },
    { quoted: m }
  );
};

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['boton']

handler.before = async (m, { conn }) => {
  if (opciones[m.text]) {
    await opciones[m.text](m, { conn })
  }
}

export default handler