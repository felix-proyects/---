const handler = async (m, {conn, participants, groupMetadata}) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || `${global.icons}`;
  const {antiToxic, reaction, antiTraba, antidelete, antiviewonce, welcome, detect, antiLink, antiLink2, modohorny, autosticker, audios} = global.db.data.chats[m.chat];
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
  const text = `*「✿」Grupo ◢ ${groupMetadata.subject} ◤*

❏ Usuarios » ${participants.length}
☆ Registros » ${totalreg}
♡ Creador » @${owner.split('@')[0]}
♧ Bot principal » Undefined

✐ ${botname} » *✓ Activado*
✐ Anti-Links » *${antiLink ? ' ✓ Activado' : '✗ Desactivado'}*
✐ NSFW » *${nsfw ? ' ✓ Activado' : '✗ Desactivado'}*
✐ Welcome » *${welcome ? ' ✓ Activado' : '✗ Desactivado'}*
✐ Alertas » *${restrict ? ' ✓ Activado' : '✗ Desactivado'}* 
`.trim();
  conn.sendFile(m.chat, pp, 'img.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ['infogrupo'];
handler.tags = ['grupo'];
handler.command = ['infogrupo', 'gp'];
handler.register = true
handler.group = true;
export default handler;