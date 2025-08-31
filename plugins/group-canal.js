import fs from 'fs';

const archivoRegistro = './chats_ya_notificados.json';
let yaNotificados = new Set(
  fs.existsSync(archivoRegistro)
    ? JSON.parse(fs.readFileSync(archivoRegistro))
    : []
);

// Define aquí la URL/canal que quieres enviar
const ch = 'https://whatsapp.com/channel/0029VbAa5sNCsU9Hlzsn651S';

const enviarAvisoCanal = async (conn, notifyChat = null) => {
  const mensaje = `Te invitamos al canal oficial Del Bot ya que lo acabamos de cambiar:\n\n${ch}`;

  // Ajusta para frameworks que usan conn.chats o conn.store.chats
  const chats = Object.entries(conn.chats || conn.store?.chats || {}).filter(
    ([jid, chat]) => jid && (chat?.isChats || chat?.id)
  );

  let usuarios = [];
  let grupos = [];

  if (notifyChat) await conn.sendMessage(notifyChat, { text: '📢 *Enviando mensaje del canal...* Esto puede tardar unos segundos.' });

  for (let [jid] of chats) {
    if (yaNotificados.has(jid)) continue;

    const isGroup = jid.endsWith('@g.us');
    try {
      await conn.sendMessage(jid, { text: mensaje });
      if (isGroup) grupos.push(jid);
      else usuarios.push(jid);
      yaNotificados.add(jid);
    } catch (e) {
      console.log(`❌ Error al enviar a ${jid}:`, e?.message || e);
    }
    await new Promise(resolve => setTimeout(resolve, 400));
  }

  fs.writeFileSync(archivoRegistro, JSON.stringify([...yaNotificados], null, 2));

  let resumen = `✅ *Mensaje del canal enviado correctamente*\n\n📨 Total: ${usuarios.length + grupos.length} nuevos chats\n👤 Usuarios: ${usuarios.length}\n👥 Grupos: ${grupos.length}\n\n`;

  if (usuarios.length) {
    resumen += `📋 *Usuarios:*\n` + usuarios.map(u => `• wa.me/${u.replace(/[^0-9]/g, '')}`).join('\n') + '\n\n';
  }

  if (grupos.length) {
    resumen += `📋 *Grupos:*\n`;
    for (const g of grupos) {
      try {
        let metadata = await conn.groupMetadata(g);
        resumen += `• ${metadata.subject}\n`;
      } catch {
        resumen += `• ${g}\n`;
      }
    }
  }

  if (notifyChat) await conn.sendMessage(notifyChat, { text: resumen });

  return { usuarios, grupos };
};

// Handler compatible con bots tipo Baileys
const handler = async (m, { conn, isOwner }) => {
  if (!isOwner) throw '❌ Este comando es solo para el *owner*.';
  await enviarAvisoCanal(conn, m.chat);
};

handler.help = ['canal'];
handler.tags = ['owner'];
handler.command = ['canal'];
handler.owner = true;

// Para ejecución automática al arrancar el bot:
handler.run = async (conn) => {
  await enviarAvisoCanal(conn, null);
};

export default handler;