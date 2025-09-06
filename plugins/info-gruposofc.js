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
  const finalMessage = `👋 Hola`;

  // Enviar mensaje inicial
  let { key } = await conn.sendMessage(m.chat, {text: `Cargando menu del bot...`}, {quoted: m});
  
  // Animar las barras de carga
  for (let i = 0; i < loadingBars.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    await conn.sendMessage(m.chat, {text: loadingBars[i], edit: key}, {quoted: m});
  }

  // Mensaje final
  await conn.sendMessage(m.chat, {text: finalMessage, edit: key}, {quoted: m});
};

handler.help = ['hola'];
handler.tags = ['fun'];
handler.command = ['hola'];
export default handler;