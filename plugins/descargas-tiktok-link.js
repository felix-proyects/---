import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command, text }) => {
    if (!text) return conn.reply(m.chat, `☆ Ingresa el enlace de TikTok\n\nEjemplo: ${usedPrefix}${command} https://vm.tiktok.com/xxxxx`, m, fake)

    if (!text.includes('tiktok.com') && !text.includes('vm.tiktok')) {
        return conn.reply(m.chat, '☆ Por favor ingresa un enlace válido de TikTok', m, fake)
    }

    await m.react('🕒')
    conn.reply(m.chat, '✧ *Descargando video de TikTok...*', m, fake)

    try {
        const response = await axios.get(`https://ruby-core.vercel.app/api/download/tiktok?url=${encodeURIComponent(text)}`)
        const result = response.data

        if (!result.status || !result.video_no_watermark) {
            return conn.reply(m.chat, '☆ No se pudo obtener el video', m, fake)
        }

        let caption = `*Título:* ${result.title}
*Autor:* ${result.author}
*Música:* ${result.music ? 'Incluida' : 'No disponible'}
*ID:* ${result.id}`

        await conn.sendFile(m.chat, result.video_no_watermark, 'tiktok.mp4', caption, m, null, {
            asDocument: false,
            mimetype: 'video/mp4'
        })

        await m.react('✅')

    } catch (error) {
        await m.react('❌')
        conn.reply(m.chat, `☆ Error al descargar: ${error.message}`, m, fake)
    }
}

handler.help = ['tiktok <link>']
handler.tags = ['descargas']
handler.command = ['tiktok', 'tt']
handler.coin = 2
handler.group = true
handler.register = true

export default handler