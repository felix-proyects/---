import ws from 'ws'

const handler = async (m, { conn }) => {
  const subBots = [...new Set([...globalThis.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn.user.jid)])]

  if (!subBots.includes(globalThis.conn.user.jid)) {
    subBots.push(globalThis.conn.user.jid)
  }

   let texto = await m.mentionedJid
   let who = texto.length > 0 ? texto[0] : (m.quoted ? await m.quoted.sender : false)
  const chat = globalThis.db.data.chats[m.chat]
  if (!who) return conn.reply(m.chat, `✿ Debes mencionar a un bot del grupo para establecerlo como primario de este grupo.
> ❀ Puedes ver la lista de bots del club con el comando: *#bots*`, m, fake)

  if (!subBots.includes(who)) return conn.reply(m.chat, `✿ El numero que mencionaste no es un bot de *Deymoon Club*
> ✎ Puedes ver la lista de bots del club con el comando: *#bots*`, m, fake)

  if (chat.primaryBot === who) {
    return conn.reply(m.chat, `✿ @${who.split`@`[0]} ya es el Bot principal del Grupo.`, m, { mentions: [who] });
  }

  try {
    chat.primaryBot = who
    conn.reply(m.chat, `*ꕤ* Se ha establecido a @${who.split`@`[0]} como bot primario de este grupo.\n> Ahora todos los comandos de este grupo serán ejecutados por @${who.split`@`[0]}.`, m, { mentions: [who] })
  } catch (e) {
    await m.reply(`${e}`);
  }
}

handler.help = ['setprimary']
handler.tags = ['group']
handler.command = ['setprimary']

export default handler