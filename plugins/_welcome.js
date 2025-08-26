const thumbnailUrl = 'https://qu.ax/XRxEh.jpg'

export async function before(m, { conn, participants, groupMetadata }) {
  if (
    !m.messageStubType ||
    !m.isGroup ||
    !m.messageStubParameters?.[0] ||
    !global.db.data.chats[m.chat]?.welcome
  ) return !0

  const jid = m.messageStubParameters[0]
  const taguser = '@' + jid.split('@')[0]
  const groupName = groupMetadata.subject
  // El total real tras la acción (entra o sale)
  const total = [28, 32].includes(m.messageStubType)
    ? participants.length - 1
    : participants.length + 1

  const contextLink = {
    externalAdReply: {
      title: groupName,
      body: 'Deymoon Club',
      thumbnailUrl: thumbnailUrl,
      mediaType: 1,
      renderLargerThumbnail: false,
      sourceUrl: 'https://deymoon-club.vercel.app/'
    }
  }

  // B I E N V E N I D A
  if (m.messageStubType == 27) {
    const bienvenida = 
`𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨 𝐚 *${groupName}*

✰ *${taguser}*

シ︎ 𝐃𝐢𝐬𝐟𝐫𝐮𝐭𝐚 𝐝𝐞 𝐭𝐮 𝐞𝐬𝐭𝐚𝐝𝐢𝐚 𝐚𝐪𝐮í 𝐞𝐧 𝐞𝐥 𝐠𝐫𝐮𝐩𝐨 de ${total} Miembros.
> 𝐔𝐬𝐚 #help 𝐏𝐚𝐫𝐚 𝐯𝐞𝐫 𝐦𝐢 𝐥𝐢𝐬𝐭𝐚 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬.
deymoon-club.vercel.app/`
    await conn.sendMessage(m.chat, {
      text: bienvenida,
      contextInfo: {
        mentionedJid: [jid],
        ...contextLink
      }
    })
  }

  // D E S P E D I D A
  if ([28, 32].includes(m.messageStubType)) {
    const despedida = 
`Adiós de  *${groupName}*

✰ *${taguser}*

シ︎ Nos vemos después y recuerda que ahora quedamos ${total} Miembros.
> 𝐔𝐬𝐚 #help 𝐏𝐚𝐫𝐚 𝐯𝐞𝐫 𝐦𝐢 𝐥𝐢𝐬𝐭𝐚 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬.
deymoon-club.vercel.app/`
    await conn.sendMessage(m.chat, {
      text: despedida,
      contextInfo: {
        mentionedJid: [jid],
        ...contextLink
      }
    })
  }
}

// Comando para probar en el grupo
let handler = async (m, { conn, participants, groupMetadata }) => {
  const jid = m.sender
  const taguser = '@' + jid.split('@')[0]
  const groupName = groupMetadata?.subject || 'Grupo'
  const total = participants ? participants.length : 1

  const contextLink = {
    externalAdReply: {
      title: groupName,
      body: 'Deymoon Club',
      thumbnailUrl: thumbnailUrl,
      mediaType: 1,
      renderLargerThumbnail: false,
      sourceUrl: 'https://deymoon-club.vercel.app/'
    }
  }

  const bienvenida = 
`𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨 𝐚 *${groupName}*

✰ *${taguser}*

シ︎ 𝐃𝐢𝐬𝐟𝐫𝐮𝐭𝐚 𝐝𝐞 𝐭𝐮 𝐞𝐬𝐭𝐚𝐝𝐢𝐚 𝐚𝐪𝐮í 𝐞𝐧 𝐞𝐥 𝐠𝐫𝐮𝐩𝐨 de ${total} Miembros.
> 𝐔𝐬𝐚 #help 𝐏𝐚𝐫𝐚 𝐯𝐞𝐫 𝐦𝐢 𝐥𝐢𝐬𝐭𝐚 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬.
deymoon-club.vercel.app/`

  const despedida = 
`Adiós de  *${groupName}*

✰ *${taguser}*

シ︎ Nos vemos después y recuerda que ahora quedamos ${total} Miembros.
> 𝐔𝐬𝐚 #help 𝐏𝐚𝐫𝐚 𝐯𝐞𝐫 𝐦𝐢 𝐥𝐢𝐬𝐭𝐚 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬.
deymoon-club.vercel.app/`

  await conn.sendMessage(m.chat, {
    text: bienvenida,
    contextInfo: {
      mentionedJid: [jid],
      ...contextLink
    }
  })
  await conn.sendMessage(m.chat, {
    text: despedida,
    contextInfo: {
      mentionedJid: [jid],
      ...contextLink
    }
  })
}
handler.command = ['testwelcome']
handler.group = true

export default handler