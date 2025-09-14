export async function desactivarBot(m, command, usedPrefix) {
  let chat = global.db.data.chats[m.chat];
  let user = global.db.data.users[m.sender];

  if (chat.isBanned) {
    const avisoDesactivado = `☆ El bot *Deymoon Club* está desactivado en este grupo.\n\n> ✦ Un *administrador* puede volver a activarlo con el comando:\n> » *${usedPrefix}bot on*`;
    await m.reply(avisoDesactivado);
    return true; // Para indicar que ya respondió y no seguir procesando
  }

  if (!user.commands) {
    user.commands = 0;
  }
  user.commands += 1;
  return false; // Para indicar que puede seguir procesando
}