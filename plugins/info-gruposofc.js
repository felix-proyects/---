import fetch from 'node-fetch'

let handler = async (m, { conn }) => {

  const namegrupo = 'Grupo Oficial'
  const gp1 = 'https://chat.whatsapp.com/ETZduk7trjG9xgTXVCRHYK?mode=ems_copy_c' // ← tu link real

  const namechannel = 'Canal de la Bot'
  const channel = 'https://whatsapp.com/channel/0029Vb5nxWWFHWq5CNFP5b21' // ← tu canal real

  const namehosting = 'Canal del host'
  const channelhosting = 'https://whatsapp.com/channel/0029VbAa5sNCsU9Hlzsn651S' // ← tu canal real

  const dev = '💎 Creador: Félix Manuel'
  const catalogo = 'https://qu.ax/dXOUo.jpg' // o './media/grupos.jpg'
  const emojis = '👨‍💻'

  let grupos = `
╭─⟪ 💎GRUPOS OFICIALES
│
│ 💙 *${namegrupo}*
│ ${gp1}
│
│ 💙 *${namechannel}*
│ ${channel}
│
│ 💙  *${namehosting}*
│ ${channelhosting}   
╰───────────────╯
`

  await conn.sendFile(m.chat, catalogo, 'grupos.jpg', grupos.trim(), m)
  await m.react(emojis)
}

handler.help = ['grupos']
handler.tags = ['info']
handler.command = ['grupos', 'links', 'groups']

export default handler
