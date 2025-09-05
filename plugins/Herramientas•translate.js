import fetch from 'node-fetch';

const handler = async (m, { args, usedPrefix, command }) => {
  const msg = `*[❗𝐈𝐍𝐅𝐎❗] 𝚄𝚂𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix + command} (idioma) (texto)*\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} en Hola, cómo estás*`;

  if (!args || !args[0]) return m.reply(msg);

  let lang = args[0];
  let text = args.slice(1).join(' ');

  if ((args[0] || '').length !== 2) {
    lang = 'es';
    text = args.join(' ');
  }

  if (!text && m.quoted && m.quoted.text) text = m.quoted.text;
  if (!text) return m.reply(msg);

  try {
    await m.react('⏳');

    const url = `https://gokublack.xyz/tools/Traductor?texto=${encodeURIComponent(text)}&idioma=${lang}`;
    const res = await fetch(url);
    const json = await res.json();

    if (!json || !json.status || !json.data || !json.data.translatedText) {
      await m.react('❌');
      return m.reply('*[❗𝐈𝐍𝐅𝐎❗] ERROR AL TRADUCIR, INTÉNTALO NUEVAMENTE*');
    }

    const translated = json.data.translatedText;
    await m.react('✅');
    await m.reply(`*Traducción (${lang}):*\n${translated}`);
  } catch (e) {
    console.error(e);
    await m.react('❌');
    await m.reply('*[❗𝐈𝐍𝐅𝐎❗] ERROR, VUELVA A INTENTARLO*');
  }
};

handler.command = ['translated', 'traducir'];
handler.register = true;

export default handler;