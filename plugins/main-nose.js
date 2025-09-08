// Código creado por Félix y modificado para todos los usuarios por Cuervo OFC
import fs from 'fs';
import path from 'path';

const channelRD = {
  id: "120363418804796632@newsletter",
  name: "KURAYAMI-HOST"
};
const thumbnailUrl = 'https://qu.ax/dXOUo.jpg';

let handler = async function (m, { args, command, usedPrefix, conn }) {
  if (!args[0]) {
    await conn.sendMessage(m.chat, {
      react: { text: "✖️", key: m.key }
    });
    const contextNewsletter = {
      isForwarded: true,
      forwardingScore: 999,
      forwardedNewsletterMessageInfo: {
        newsletterJid: channelRD.id,
        newsletterName: channelRD.name,
        serverMessageId: -1
      },
      externalAdReply: {
        title: channelRD.name,
        body: 'MAKIMA 2.0 BOT',
        thumbnailUrl: thumbnailUrl,
        mediaType: 1,
        renderLargerThumbnail: false,
        sourceUrl: `https://whatsapp.com/channel/${channelRD.id.replace('@newsletter', '')}`
      }
    };
    await conn.sendMessage(
      m.chat,
      {
        text: '「🩵」Debes ingresar un texto para usar este comando.',
        contextInfo: contextNewsletter
      },
      { quoted: m }
    );
    return;
  }
  const text = args.join(' ');
  const quotedMsg = {
    key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: m.chat, id: Math.random().toString(36).slice(2) },
    message: { conversation: 'Deymoon Club' }
  };
  await conn.sendMessage(m.chat, { text }, { quoted: quotedMsg });
};

handler.help = ['repite', 'repeat', 'copiame'].map(v => v + ' <texto>');
handler.tags = ['tools'];
handler.command = /^(repite|repeat|copiame)$/i;
handler.register = false;
handler.group = false;

export default handler;