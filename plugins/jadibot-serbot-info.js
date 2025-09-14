import ws from 'ws'

async function handler(m, { conn: stars, usedPrefix }) {
  let uniqueUsers = new Map()

  global.conns.forEach((conn) => {
    if (conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED) {
      uniqueUsers.set(conn.user.jid, conn)
    }
  })

  let users = [...uniqueUsers.values()]

  let message = users.map((v, index) => `*#${index + 1} »* ${v.user.name || '-'}\n*❏* wa.me/${v.user.jid.replace(/[^0-9]/g, '')}\n> 🜸 Tipo » (𝐒𝐮𝐛-𝐁𝐨𝐭)`).join('\n\n')

  let replyMessage = message.length === 0 ? '' : message
  let totalUsers = users.length
  let responseMessage = `*ꕥ LISTA DE BOTS ACTIVOS*\n\n❀ Principal » *1*\n☆ Premium » *1*\n*✿ Sub-Bots »* ${totalUsers || '0'}\n\nNúmeros de los Bots\n\n${replyMessage.trim()}`.trim()

  await stars.sendMessage(m.chat, { text: responseMessage, ...fake }, { quoted: m })
}

handler.command = ['sockets', 'bots']
handler.help = ['bots', 'sockets']
handler.tags = ['jadibot']
export default handler