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

    // Formato de uptime
    const convertirMsADiasHorasMinutosSegundos = (ms) => {
      let segundos = Math.floor(ms / 1000);
      let minutos = Math.floor(segundos / 60);
      let horas = Math.floor(minutos / 60);
      segundos %= 60;
      minutos %= 60;
      horas %= 24;
      return `${horas} horas, ${minutos} minutos, ${segundos} segundos`;
    };

    // Detalles de subbots en el formato que pides
    let detallesBots = '';
    if (cantidadSubBots > 0) {
      let i = 1;
      for (let [jid, connBot] of uniqueUsers.entries()) {
        const numero = jid.split('@')[0];
        const uptime = connBot.uptime
          ? convertirMsADiasHorasMinutosSegundos(Date.now() - connBot.uptime)
          : 'Desconocido';
        detallesBots += `☆ Bot » wa.me/${numero}\n> 🜸 Uptime » ${uptime}\n\n`;
        i++;
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