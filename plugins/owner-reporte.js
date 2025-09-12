let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return conn.reply(m.chat, `☆ Por favor, ingrese el error que desea reportar.`, m, fake)
    if (text.length < 10) return conn.reply(m.chat, `☆ Especifique bien el error, mínimo 10 caracteres.`, m, fake)
    if (text.length > 1000) return conn.reply(m.chat, `☆ *Máximo 1000 caracteres para enviar el error.`, m, fake)
    const teks = `•  〘 *R E P O R T E* 〙  •

╭──────────
├ *Bot:* 
├⊷ Sub-Bot
├ *Usuario:* 
├⊷${m.pushName || 'Anónimo'}
├ *Número:* 
├⊷ Wa.me/${m.sender.split`@`[0]}
├ *Reporte:*
├⊷ ${text}
╰──────────`
    await conn.reply(`50672110920@s.whatsapp.net`, m.quoted ? teks + m.quoted.text : teks, m, { mentions: conn.parseMention(teks) })

    m.reply(`☆ El reporte esta en revisión, si esto es falso serás baneado.`)
}
handler.help = ['reportar']
handler.tags = ['info']
handler.command = ['reporte', 'report', 'reportar', 'bug', 'error']

export default handler