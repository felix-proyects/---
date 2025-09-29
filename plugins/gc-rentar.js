const xpperestrellas = 350;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(/^rentar/i, '');
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperestrellas) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);

  if (global.db.data.users[m.sender].estrellas >= xpperestrellas * count) {
    global.db.data.users[m.sender].estrellas -= xpperestrellas * count;
    global.db.data.users[m.sender].tokens += count;;

    let userRents = global.db.data.userRents || {};
    
    if (!userRents[m.sender]) {
      userRents[m.sender] = {
        tokens: 0,
        groups: []
      };
    }

    userRents[m.sender].tokens += count;

    global.db.data.userRents = userRents;

    conn.reply(m.chat, `
┌─『 Rentar a Makima Bot   』*
│╭──────────────┄
││ *Compra Nominal* : + ${count} Token
││ *Gastado* : -${xpperestrellas * count} Estrellas 🌟
││ *Tokens Disponibles* : ${userRents[m.sender].tokens}
│╰──────────────┄
└──────────────`, m, fake);
  } else {
    conn.reply(m.chat, `😔 Lo siento, no tienes suficiente *Estrellas 🌟* para comprar *${count}* Token`, m, fake);
  }
};
handler.help = ['rentar'];
handler.tags = ['grupo'];
handler.command = ['rentar'];

handler.disabled = false;

export default handler;