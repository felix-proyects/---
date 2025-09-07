let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {

if (!text) return m.fake(`☆ Ingresa el enlace del Grupo.`)
try {
let [_, code] = text.match(linkRegex) || []
if (!code) return m.fake('Enlace invalido.')
let res = await conn.groupAcceptInvite(code)
m.reply(`Éxito al unirme al grupo.`)
} catch {
return m.fake('✘ Ocurrió un error al unirme al grupo...')}}

handler.help = ['join <link>']
handler.tags = ['owner']
handler.command = ['join', 'autojoin'] 
handler.register = true

export default handler