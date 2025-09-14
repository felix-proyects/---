import { googleImage } from '@bochilteam/scraper';

const handler = async (m, { conn }) => {
  const text = m.text.split(' ').slice(1).join(' ');
  if (!text) {
    conn.reply(m.chat, '✿ Debes ingresar un texto para buscar las imágenes', m, fake);
    return;
  }

  conn.reply(m.chat, '✿ *Buscando su imagen...*', m, fake);
  const res = await googleImage(text);
  const messages = [
    ['Imagen 1', 'Deymoon Club', await res.getRandom(), [], [], [], []],
    ['Imagen 2', 'Deymoon Club', await res.getRandom(), [], [], [], []],
    ['Imagen 3', 'Deymoon Club', await res.getRandom(), [], [], [], []],
    ['Imagen 4', 'Deymoon Club', await res.getRandom(), [], [], [], []]
  ];

  await conn.sendCarousel(m.chat, `✿ Resultados de: ${text}`, 'Deymoon Club', null, messages, m);
};

handler.help = ['imagen <query>'];
handler.tags = ['buscador', 'descargas'];
handler.command = ['image', 'imagen'];

export default handler;