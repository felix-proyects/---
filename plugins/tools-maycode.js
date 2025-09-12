let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return conn.reply(m.chat, `☆ Por favor, ingrese el error que desea reportar.`, m, fake)
    if (text.length < 10) return conn.reply(m.chat, `☆ Espesifique la sugerencia de comando. Máximo 10 caracteres.`, m, fake)
    if (text.length > 1000) return conn.reply(m.chat, `☆ El máximo de la sugerencia es de 1000 caracteres.`, m, fake)
    const teks = `*Nueva Sugerencia De comando*

╭──────────
├ *Usuario:* 
├⊷${m.pushName || 'Anónimo'}
├ *Número:* 
├⊷ Wa.me/${m.sender.split`@`[0]}
├ *Sugerencia:*
├⊷ ${text}
╰──────────`
    await conn.reply(`50672110920@s.whatsapp.net`, m.quoted ? teks + m.quoted.text : teks, m, { mentions: conn.parseMention(teks) })

    m.reply(`☆ La sugerencia ya está en revisión, si el comando ya existe te avisaremos y si no existe pondremos el comando en nuestra lista de comandos junto a otros comandos que se están creando.`)
}
handler.help = ['sugerir']
handler.tags = ['tools']
handler.command = ['sugerir', 'sug', 'newcomando']

export default handler