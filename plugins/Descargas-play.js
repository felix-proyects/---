import yts from 'yt-search';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    throw `💎 Ingresa un nombre o texto para buscar en YouTube.\n\n📌 *Ejemplo:* ${usedPrefix + command} Haikyuu AMV`;
  }

  try {
    await m.react('🕒'); // Reacción de búsqueda

    const search = await yts(text);
    const videoInfo = search.all?.[0];

    if (!videoInfo) {
      throw '❌ No se encontraron resultados. Intenta con otro título.';
    }

    const body = `DESCARGANDO ${videoInfo.title}

> Canal: ${videoInfo.author.name}
> Duración: ${videoInfo.timestamp}
> Publicado: ${videoInfo.ago}
> Vistas: ${videoInfo.views.toLocaleString()} 

>  *Selecciona una opción para descargar:*`;

    await conn.sendMessage(
      m.chat,
      {
        image: { url: videoInfo.thumbnail },
        caption: body,
        footer: 'Deymoon Club',
        buttons: [
          { buttonId: `.ytmp3 ${videoInfo.url}`, buttonText: { displayText: 'Audio' } },
          { buttonId: `.play2 ${videoInfo.url}`, buttonText: { displayText: 'Video' } },
        ],
        viewOnce: true,
        headerType: 4,
      },
      { quoted: m }
    );

    await m.react('✅'); // Reacción de éxito
  } catch (e) {
    await m.reply(`❌ *Error:* ${e.message}`);
    await m.react('✖️');
  }
};

handler.command = ['play', 'playaudio'];
handler.tags = ['downloader'];
handler.group = true;
handler.limit = 6;

export default handler;
