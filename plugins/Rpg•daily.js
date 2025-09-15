let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender];

  const tiempoMs = 86400000; 
  const tiempoActual = Date.now();
  const diferencia = tiempoActual - (user.lastclaim || 0);

  if (diferencia < tiempoMs) {
    let restante = msToTime((user.lastclaim + tiempoMs) - tiempoActual);
    return conn.reply(m.chat, `Vuelve en *${restante}* para no perder tu fecha.`, m, fake);
  }

  if (diferencia > tiempoMs * 2) {
    user.dailyStreak = 1;
  } else {
    user.dailyStreak = (user.dailyStreak || 0) + 1;
  }

  let streak = user.dailyStreak;
  let reward = 30000 + (streak * 5000);
  let diamantes = Math.floor(5 + streak);
  let exp = Math.floor(200 + streak * 20);

  user.coin += reward;
  user.diamond += diamantes;
  user.exp += exp;
  user.lastclaim = tiempoActual;

  conn.reply(m.chat, `「✿」Has reclamado tu recompensa diaria de *¥${reward.toLocaleString()} ${moneda}*! (Día *${streak}*)\n` +
    `> Día *${streak + 1}* » *+¥${(reward + 5000).toLocaleString()}*`, m, fake);
}

handler.help = ['daily', 'diario'];
handler.tags = ['rpg'];
handler.command = ['daily', 'diario'];
handler.group = true;

export default handler;

function msToTime(duration) {
  let hours = Math.floor(duration / (1000 * 60 * 60));
  let minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));

  return `${hours} hora(s) y ${minutes} minuto(s)`;
}