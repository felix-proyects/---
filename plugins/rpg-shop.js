const xpperchocolates = 350;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(/^buy/i, '');
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperchocolates) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);
  if (global.db.data.users[m.sender].exp >= xpperchocolates * count) {
    global.db.data.users[m.sender].exp -= xpperchocolates * count;
    global.db.data.users[m.sender].chocolates += count;
    conn.reply(m.chat, `
╔═════⩽✰⩾═════╗
║    𝐍𝐨𝐭𝐚 𝐃𝐞 𝐏𝐚𝐠𝐨 
╠═════⩽✰⩾═════╝
║╭───────────┄
║│ *Compra Nominal* : + ${count} 
║│ *Gastado* : -${xpperchocolates * count} XP
║╰───────────┄
╚═══════⩽✰⩾═══╝`, m, fake);
  } else conn.reply(m.chat, `No tienes suficiente XP para comprar *${count}* Coins`, m, fake);
};
handler.help = ['Buy', 'Buyall'];
handler.tags = ['xp'];
handler.register = true
handler.command = ['buy', 'buyall'];

handler.disabled = false;

export default handler;