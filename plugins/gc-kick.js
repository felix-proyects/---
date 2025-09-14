var handler = async (m, { conn, participants, usedPrefix, command }) => {

    // let user = m?.message?.extendedTextMessage?.contextInfo?.participant || m?.mentionedJid[0] || await m?.quoted?.sender;

   let texto = await m.mentionedJid
   let user = texto.length > 0 ? texto[0] : (m.quoted ? await m.quoted.sender : false)
    if (!user) {
        return conn.reply(m.chat, '✿ Etiqueta o menciona al usuario que quieras expulsar.', m, fake);
    }

    const groupInfo = await conn.groupMetadata(m.chat);
    const ownerGroup = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net';
    const ownerBot = globalThis.owner[0][0] + '@s.whatsapp.net';
    //const nn = conn.getName(m.sender);

    if (user === m.sender) {
        return conn.reply(m.chat, '✿ No puedes automencionarte, menciona a otro usuario.', m, fake);
    }

    if (user === conn.user.jid) {
        return conn.reply(m.chat, '✿ Yo como bot no puedo autoeliminarme del grupo.', m, fake);
    }

    if (user === ownerGroup) {
        return conn.reply(m.chat, '✿ No puedo eliminar al propietario del grupo', m, fake);
    }

    if (user === ownerBot) {
        return conn.reply(m.chat, '✿ No puedo eliminar al propietario del bot', m, fake);
    }

    const participant = groupInfo.participants.find(participant => participant.jid === user);

    if (!participant) {
        return conn.reply(m.chat, `✿ El usuario *${globalThis.db.data.users[user].name}* ya no está en el grupo.`, m, fake);
    }

    await conn.groupParticipantsUpdate(m.chat, [user], 'remove');

    await conn.reply(m.chat, `✿ El usuario *${globalThis.db.data.users[user].name}* ha sido expulsado del grupo correctamente.`, m, fake);

};

handler.help = ['kick'];
handler.tags = ['group'];
handler.command = ['kick'];
handler.admin = true;
handler.botAdmin = true;

export default handler;