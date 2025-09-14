import fs from 'fs'
import path from 'path'

var handler = async (m, {conn, isPrems }) => {
  let str = `「✿」El codigo va bien`
  conn.reply(m.chat, str, m, fake)

handler.help = ['prueba2']
handler.tags = ['main']
handler.command = ['prueba2']

export default handler