import fs from 'fs'
import path from 'path'

var handler = async (m, { conn, isPrems }) => {
  let text = `「✿」Exito

Jajaja`
  conn.reply(m.chat, text, m, fake)
}

handler.help = ['prueba2']
handler.tags = ['main']
handler.command = ['exito']

export default handler