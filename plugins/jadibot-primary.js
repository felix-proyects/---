import fs from 'fs'
import path from 'path'

// Fake de canal (puedes personalizar el texto)
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

// SETPRIMARY
let setprimary = async (m, { conn, text }) => {
  if (!text || !text.replace(/[^0-9]/g, '')) {
    return conn.reply(m.chat, '「🩵」Debes etiquetar al bot que quieres hacer principal en este grupo.', m, fake)
  }

  let botNumber = text.replace(/[^0-9]/g, '')
  let botJid = botNumber + '@s.whatsapp.net'

  if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {}
  global.db.data.chats[m.chat].primaryBot = botJid

  conn.reply(m.chat, `El bot principal para este grupo ahora es:\n*${botJid}*`, m, fake)
}

setprimary.help = ['setprimary @bot']
setprimary.tags = ['owner']
setprimary.command = ['setprimary']
setprimary.admin = true

// RESETPRIMARY
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

export default setprimary
export { resetprimary }