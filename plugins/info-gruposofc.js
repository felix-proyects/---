import fs from 'fs'
import path from 'path'

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`☆ Formato incorrecto.\n\n◇ Usa asi: *${usedPrefix + command} moneda nueva*`)

  const senderNumber = m.sender.replace(/[^0-9]/g, '')
  const botPath = path.join('./JadiBots', senderNumber)
  const configPath = path.join(botPath, 'config.json')

  if (!fs.existsSync(botPath)) {
    return m.reply('✧ Este comando es sólo para los sub bots.')
  }

  let config = {}

  if (fs.existsSync(configPath)) {
    try {
      config = JSON.parse(fs.readFileSync(configPath))
    } catch (e) {
      return m.reply('☆ Error al leer la configuración.')
    }
  }

  config.currency = text.trim() // Cambia la moneda

  try {
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2))
    m.reply(`☆ La moneda del bot fue actualizada a: *${text.trim()}*`)
  } catch (err) {
    console.error(err)
    m.reply('☆ Ocurrió un error al guardar la moneda.')
  }
}

handler.help = ['setcurrency']
handler.tags = ['serbot']
handler.command = /^setcurrency$/i
handler.owner = false // solo el dueño puede usar esto

export default handler