let handler = async (m, { conn, command }) => {
  // Reacciona con ❌
  if (conn.sendMessage) {
    await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
  }

  // Envía el mensaje personalizado
  await conn.sendMessage(m.chat, { 
    text: `❏ El comando *${command}* no esta disponible para ti.\n\n> ✐ Usa #help para ver los comandos disponibles.`
  }, { quoted: m });
}

handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño']

export default handler