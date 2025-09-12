/*Código Modificado y limpiado para quitar los trucos externos por felix.
Créditos: https://github.com/FELIX-OFC
*/
let handler = async (m, { conn, args, participants }) => {
    // Define los nombres y emojis de moneda (puedes personalizar)
    const moneda = global.db.data.config?.moneda || 'Diamantes'
    const emoji = global.emoji || '💰'

    // Obtiene todos los usuarios registrados en la base de datos
    let users = Object.entries(global.db.data.users).map(([jid, user]) => ({
        ...user,
        jid
    }));

    // Filtra solo los usuarios que están en este grupo
    const groupJids = participants.map(u => u.id);
    users = users.filter(u => groupJids.includes(u.jid));

    if (!users.length) {
        return conn.reply(m.chat, `${emoji} No hay usuarios registrados en este grupo.`, m);
    }

    // Ordena por la suma de monedas y banco de mayor a menor
    users.sort((a, b) => ((b.coin || 0) + (b.bank || 0)) - ((a.coin || 0) + (a.bank || 0)));

    // Paginación y límites
    const page = Math.max(1, parseInt(args[0]) || 1);
    const perPage = 10;
    const totalPages = Math.ceil(users.length / perPage);
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const usuariosPagina = users.slice(start, end);

    let texto = `${emoji} 「Top usuarios con más *¥${moneda}*」\n\n`;
    for (let i = 0; i < usuariosPagina.length; i++) {
        const { jid, coin = 0, bank = 0 } = usuariosPagina[i];
        const total = coin + bank;
        let nombre;
        try {
            nombre = await conn.getName(jid);
        } catch {
            nombre = 'Usuario';
        }
        texto += `✰ ${start + i + 1}. *${nombre}*\n`;
        texto += `      💸 ¥${coin.toLocaleString()} + 🏦 ¥${bank.toLocaleString()} = 💰 *¥${total.toLocaleString()}*\n\n`;
    }
    texto += `> Página *${page}* de *${totalPages}*`;

    await conn.reply(m.chat, texto.trim(), m, {
        mentions: usuariosPagina.map(u => u.jid)
    });
}

handler.help = ['baltop', 'eboard'];
handler.tags = ['rpg', 'economy'];
handler.command = ['baltop', 'eboard'];
handler.group = true;
handler.register = true;
handler.exp = 0;

export default handler;