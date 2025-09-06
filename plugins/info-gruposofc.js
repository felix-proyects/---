//* Código creado por Félix, no quites créditos *//
import fetch from 'node-fetch';
global.lastImagenIA = global.lastImagenIA || {};

let handler = async (m, { conn, args, command }) => {
  const dev = 'Félix Manuel';
  const redes = 'https://dash.kurayamihost.dpdns.org/home';
  const channelRD = { id: "120363418804796632@newsletter", name: "Kurayami Host" };
  const reloj = '🕑';
  const bien = '✅';
  const error = '❌';
  const banner = global.bannerUrls?.[conn.user.jid] || 'https://qu.ax/XkPVZ.jpg';
  const usuario = m.sender;
  const cooldown = 5 * 60 * 1000; // 5 minutos

  let texto = args.join(" ").trim();
  if (!texto) {
    await m.reply('☆ Debes proporcionar un texto para generar una imagen con la IA.');
    return;
  }

  // Control de cooldown
  const now = Date.now();
  const ultimoUso = global.lastImagenIA[usuario];
  if (ultimoUso && (now - ultimoUso) < cooldown) {
    let restante = cooldown - (now - ultimoUso);
    let minutos = Math.floor(restante / 60000);
    let segundos = Math.floor((restante % 60000) / 1000);
    await m.reply(`☆ Debes esperar ${minutos > 0 ? minutos + ' min ' : ''}${segundos} seg para volver a usar el comando.`);
    return;
  }

  await m.react(reloj);

  // Mensaje de carga
  await conn.sendMessage(m.chat, {
    text: '☆ Generando imagen con la IA.',
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: channelRD.id,
        newsletterName: channelRD.name,
        serverMessageId: -1,
      },
      forwardingScore: 999,
      externalAdReply: {
        title: 'Deymoon Club',
        body: dev,
        thumbnailUrl: banner,
        sourceUrl: redes,
        mediaType: 1,
        renderLargerThumbnail: false,
      },
    }
  }, { quoted: m });

  try {
    let res = await fetch(`https://myapiadonix.casacam.net/ai/iaimagen?prompt=${encodeURIComponent(texto)}`);
    let json = await res.json();

    if (!json.image_url) throw 'No se pudo generar la imagen.';

    await conn.sendMessage(m.chat, {
      image: { url: json.image_url },
      caption: `Aquí está la imagen de la solicitud: ${texto}`,
      contextInfo: {
        mentionedJid: [usuario],
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: channelRD.id,
          newsletterName: channelRD.name,
          serverMessageId: -1,
        },
        forwardingScore: 999,
        externalAdReply: {
          title: 'Deymoon Club',
          body: dev,
          thumbnailUrl: banner,
          sourceUrl: redes,
          mediaType: 1,
          renderLargerThumbnail: false,
        },
      }
    }, { quoted: m });

    await m.react(bien);
    global.lastImagenIA[usuario] = now;

  } catch (e) {
    await m.react(error);
    await m.reply(`❌ No se pudo generar la imagen.\n\n${e}`);
  }
};

handler.help = ['imagenia <texto>'];
handler.tags = ['ai', 'fun'];
handler.command = ['imagenia'];
handler.register = true;
handler.group = true;

export default handler;