import fetch from 'node-fetch';

const handler = async (m, { args, usedPrefix, command }) => {
  const msg = `Formato incorrecto.\n\n•Ejemplos de uso del comando:\n\nde inglés a Español: ${usedPrefix + command} es Hola\n\n De español a inglés: ${usedPrefix + command} en Hello.`;

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
      return m.reply('...');
    }

    const translated = json.data.translatedText;
    await m.react('✅');
    await m.reply(`*Traducción (${lang}):*\n${translated}`);
  } catch (e) {
    console.error(e);
    await m.react('❌');
    await m.reply('...');
  }
};

handler.command = ['translated', 'traducir'];
handler.register = true;

export default handler;