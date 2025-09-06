const handler = async (m, { conn, command }) => {
  // Animación de "calculando..."
  const loadingBars = [
    "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
    "《 ████▒▒▒▒▒▒▒▒》30%",
    "《 ███████▒▒▒▒▒》50%",
    "《 ██████████▒▒》80%",
    "《 ████████████》100%"
  ];
  
  // Mensaje final
  const finalMessage = `El comando funciona con éxito.`;

  // Enviar mensaje inicial
  let { key } = await conn.sendMessage(m.chat, {text: `Cargando menu del bot.`}, {quoted: m, fake});
  
  // Animar las barras de carga
  for (let i = 0; i < loadingBars.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    await conn.sendMessage(m.chat, {text: loadingBars[i], edit: key}, {quoted: m, fake});
  }

  // Mensaje final
  await conn.sendMessage(m.chat, {text: finalMessage, edit: key}, {quoted: m, fake});
};

handler.help = ['hola'];
handler.tags = ['fun'];
handler.command = ['prueba'];
export default handler;