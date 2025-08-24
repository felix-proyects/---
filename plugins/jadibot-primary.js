import fs from 'fs'
import path from 'path'

// FAKE DE CANAL (puedes personalizar el texto)
const fake = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    conversation: "Canal Oficial"
  }
}

// COMANDO SETPRIMARY
let handler = async (m, { conn, text }) => {
  if (!text || !text.replace(/[^0-9]/g, '')) {
    return conn.reply(m.chat, '「🩵」Debes etiquetar al bot que quieres hacer principal en este grupo.', m, fake)
  }

  let botNumber = text.replace(/[^0-9]/g, '')
  let botJid = botNumber + '@s.whatsapp.net'

  // Leer la carpeta de sesiones
  const sessionDir = path.join(process.cwd(), 'session')
  let botSessions = []
  try {
    botSessions = fs.readdirSync(sessionDir)
      .filter(f => f.match(/^\d+/)) // Solo carpetas/archivos que empiecen con números
      .map(f => f.replace(/\D/g, '')) // Extraer solo el número
  } catch (e) {
    botSessions = []
  }

  // Validar si el número existe en la carpeta session
  if (!botSessions.includes(botNumber)) {
    let listaBots = botSessions.length
      ? botSessions.map(n => `• ${n}`).join('\n')
      : 'No hay bots conectados en este momento'
    return conn.reply(
      m.chat,
      `🛠 El número que mencionaste no es un bot, puedes ver cuales son los bots desde aquí:\n\n${listaBots}`,
      m,
      fake
    )
  }

  if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {}
  global.db.data.chats[m.chat].primaryBot = botJid
  conn.reply(m.chat, `El bot principal para este grupo ahora es:\n*${botJid}*`, m, fake)
}

handler.help = ['setprimary @bot']
handler.tags = ['owner']
handler.command = ['setprimary']
handler.admin = true

export default handler

// COMANDO RESETPRIMARY
let resetprimary = async (m, { conn }) => {
  if (!global.db.data.chats[m.chat] || !global.db.data.chats[m.chat].primaryBot) {
    return conn.reply(m.chat, '💙 En este grupo ya no hay bot principal.', m, fake)
  }
  delete global.db.data.chats[m.chat].primaryBot
  conn.reply(m.chat, '💙 En este grupo ya no hay bot principal.', m, fake)
}

resetprimary.help = ['resetprimary']
resetprimary.tags = ['owner']
resetprimary.command = ['resetprimary']
resetprimary.admin = true

export { resetprimary }