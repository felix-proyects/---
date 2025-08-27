import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, rmSync, promises as fsPromises } from "fs";
const fs = { ...fsPromises, existsSync };
import path, { join } from 'path';
import ws from 'ws';

let handler = async (m, { conn: _envio, command, usedPrefix, args, text, isOwner }) => {
  const isDeleteSession = /^(deletesesion|deletebot|deletesession|deletesesaion)$/i.test(command);
  const isPauseBot = /^(stop|pausarai|pausarbot)$/i.test(command);
  const isShowBots = /^(bots|sockets|socket)$/i.test(command);

  const reportError = async (e) => {
    await m.reply(`⚠️ Ocurrió un error inesperado, lo siento mucho...`);
    console.error(e);
  };

  switch (true) {
    case isDeleteSession: {
      const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
      const uniqid = `${who.split('@')[0]}`;
      const dirPath = `./${jadi}/${uniqid}`;

      if (!await fs.existsSync(dirPath)) {
        await conn.sendMessage(m.chat, {
          text: `🚫 *Sesión no encontrada*\n\n✨ No tienes una sesión activa.\n\n🔰 Puedes crear una con:\n*${usedPrefix + command}*\n\n📦 ¿Tienes un ID?\nUsa este comando seguido del ID:\n*${usedPrefix + command}* \`\`\`(ID)\`\`\``
        }, { quoted: m });
        return;
      }

      if (global.conn.user.jid !== conn.user.jid) {
        await conn.sendMessage(m.chat, {
          text: `☆ Este comando solo puede usarse desde el *Bot Principal*.\n\n🔗 Accede desde aquí:\nhttps://api.whatsapp.com/send/?phone=${global.conn.user.jid.split`@`[0]}&text=${usedPrefix + command}&type=phone_number&app_absent=0`
        }, { quoted: m });
        return;
      }

      await conn.sendMessage(m.chat, {
        text: `🗑️ Tu sesión como *Sub-Bot* ha sido eliminada con éxito.`
      }, { quoted: m });

      try {
        fs.rmdir(`./${jadi}/${uniqid}`, { recursive: true, force: true });
        await conn.sendMessage(m.chat, {
          text: `☆ ¡Todo limpio! Tu sesión y sus rastros han sido borrados por completo.`
        }, { quoted: m });
      } catch (e) {
        reportError(e);
      }
      break;
    }

    case isPauseBot: {
      if (global.conn.user.jid == conn.user.jid) {
        conn.reply(m.chat, `🚫 No puedes pausar el bot principal.\n🛟 Si deseas ser un *Sub-Bot*, contacta con el número principal.`, m);
      } else {
        await conn.reply(m.chat, `🔕 *${botname} ha sido pausada.*`, m);
        conn.ws.close();
      }
      break;
    }

    case isShowBots: {
      try {
        // Usar Map para evitar duplicados:
        let uniqueUsers = new Map();
        if (!global.conns || !Array.isArray(global.conns)) global.conns = [];

        global.conns.forEach((connBot) => {
          if (connBot.user && connBot.ws?.socket?.readyState !== ws.CLOSED) {
            uniqueUsers.set(connBot.user.jid, connBot);
          }
        });

        const cantidadSubBots = uniqueUsers.size;
        const metadata = await _envio.groupMetadata(m.chat);
        const participantes = metadata.participants || [];
        const botsEnEsteGrupo = participantes.filter(p => global.db.data.users[p.id]?.isBot).length;

        // Detalles de subbots con número y uptime
        let detallesBots = '';
        if (cantidadSubBots > 0) {
          detallesBots += `\nSubbots - Números\n`;
          let i = 1;
          for (let [jid, connBot] of uniqueUsers.entries()) {
            let uptime = connBot.startTime
              ? rTime((Date.now() - connBot.startTime) / 1000)
              : 'N/A';
            detallesBots += `${i++}. wa.me/${jid.split('@')[0]}\n> 🜸 Uptime ${uptime}\n`;
          }
        }

        const textoFinal = `
*ꕥ LISTA DE BOTS ACTIVOS*

❀ Principal » *1*
✿ Subs » *${cantidadSubBots}*
☆ Premiums » 0

❏ En este grupo » *${botsEnEsteGrupo}* bots

${detallesBots.trim()}

> Deymoon ofc`.trim();

        await _envio.sendMessage(m.chat, {
          text: textoFinal,
          mentions: [...uniqueUsers.keys(), m.sender].filter(Boolean)
        }, { quoted: m });
      } catch (e) {
        reportError(e);
      }
      break;
    }
  }
};

handler.tags = ['serbot'];
handler.help = ['sockets', 'deletesesion', 'pausarai'];
handler.command = [
  'deletesesion', 'deletebot', 'deletesession', 'deletesesaion',
  'stop', 'pausarai', 'pausarbot',
  'bots', 'sockets', 'socket'
];

export default handler;

// Función para mostrar el uptime al estilo de tu código
function rTime(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dias, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Horas, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minutos, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " Segundos") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}