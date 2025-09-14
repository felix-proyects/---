export async function toggleBot(m, usedPrefix) {
  // Extraer comando principal y opción
  const commandArgs = m.text.slice(usedPrefix.length).trim().split(' ');
  const mainCommand = commandArgs[0]?.toLowerCase();
  const option = commandArgs[1]?.toLowerCase();

  // Solo ejecutar si el comando es "bot" y existe opción
  if (mainCommand === 'bot' && option) {
    const chat = global.db.data.chats[m.chat];
    if (option === 'off') {
      chat.isBanned = true;
      await m.reply(`Bot dn este grupo.\n\n> ✦ Un *administrador* puede volver a activar con:\n> » *${usedPrefix}bot on*`);
      return true; // Ya procesado, no seguir lógica normal
    }
    if (option === 'on') {
      chat.isBanned = false;
      await m.reply(`El bot ha sido activado en este grupo.\n\n> Ya puedes usar mis comandos!`);
      return true;
    }
  }
  return false; // No es comando de activar/desactivar, sigue normal
}