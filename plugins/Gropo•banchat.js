const senderNumber = m.sender.replace(/[^0-9]/g, '')
  const botPath = path.join('./JadiBots', senderNumber)


  if (!(isAdmin || isROwner || fs.existsSync(botPath))) {
    return m.reply('☆ No tienes permisos para usar este comando. Solo admins o el bot pueden hacerlo.')
  }

  global.db.data.chats[m.chat].isBanned = true
  m.reply('☆ Bot baneado para este grupo.')
}

handler.help = ['banearbot']
handler.tags = ['group']
handler.command = ['banearbot', 'banchat']
handler.group = true 

export default handler