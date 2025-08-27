import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.botNumber = '' //𝐍𝐮𝐦𝐞𝐫𝐨 𝐩𝐚𝐫𝐚 𝐁𝐨𝐭

global.owner = [
  ['14584886621', '𝗖𝗿𝗲𝗮𝗱𝗼𝗿', true],
  ['18293142989']
]

global.owner_lid = [
  [' 243349189566583', '𝗖𝗿𝗲𝗮𝗱𝗼𝗿 (LID)', true],
  ['149963665342644', 'Número 2 (LID)', true]
]

global.mods = []
global.suittag = ['5215211111111'] 
global.prems = []
global.libreria = 'Baileys'
global.baileys = 'V 6.7.8'
global.vs = '2.0.0'
global.languaje = 'Español'
global.nameqr = '𝐃𝐞𝐲𝐦𝐨𝐨𝐧 𝐔𝐥𝐭𝐫𝐚 𝐁𝐨𝐭'
global.sessions = 'Session'
global.jadi = 'JadiBot'
global.makiJadibts = true

global.packsticker = `⏤͟͞ू⃪  ̸̷͢𝐃𝐞𝐲𝐦𝐨𝐨𝐧 𝐔𝐥𝐭𝐫𝐚𑁯ᰍ\n`
global.packname = `=͟͟͞𝐃𝐞𝐲𝐦𝐨𝐨𝐧 𝐔𝐥𝐭𝐫𝐚 𝐁𝐨𝐭⏤͟͟͞͞★`
global.author = `socket:\n✐ =͟͟͞𝐃𝐞𝐲𝐦𝐨𝐨𝐧 𝐔𝐥𝐭𝐫𝐚 𝐁𝐨𝐭⏤͟͟͞͞★\n\nStickers Desarrollados en Deymoon Club`;
global.wm = '⏤͟͞ू⃪  ̸̷͢𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 Deymoon Club';
global.titulowm = '⏤͟͞ू⃪𝐃𝐞𝐲𝐦𝐨𝐨𝐧 𝐔𝐥𝐭𝐫𝐚 𝐁𝐨𝐭𑁯ᰍ';
global.igfg = 'Deymoon Club'
global.botname = '𝐃𝐞𝐲𝐦𝐨𝐨𝐧 𝐁𝐨𝐭 𝐌𝐃'
global.dev = 'Made With ❤️ by 𝗗𝙚𝙮𝙢𝙤𝙤𝙣 𝗢𝙛𝙘'
global.textbot = '𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓭 𝓫𝔂 𝗗𝙚𝙮𝙢𝙤𝙤𝙣𝗢𝙛𝙘 ❤️'
global.gt = '͟͞𝐃𝐞𝐲𝐦𝐨𝐨𝐧';
global.namechannel = '=͟͟͞𝐃𝐞𝐲𝐦𝐨𝐨𝐧 𝐂𝐥𝐮𝐛 - 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝐂𝐡𝐚𝐧𝐧𝐞𝐥⏤͟͟͞͞★'

global.moneda = '𝐃𝐞𝐲𝐦𝐦𝐨𝐧𝐬Coins'

//• ↳ ◜𝑳𝑰𝑵𝑲𝑺  𝑫𝑬𝒀𝑴𝑶𝑶𝑵 𝑪𝑳𝑼𝑩◞ • 🌪️

global.gp4 = 'https://chat.whatsapp.com/ETZduk7trjG9xgTXVCRHYK?mode=ac_t' //Grupo Oficial De𝐥 𝐂𝐥𝐮𝐛
global.gp1 = 'https://chat.whatsapp.com/CnPz48hwCLnCPkLk94KCJA?mode=ems_copy_c' //Grupo 𝐃𝐞𝐲𝐦𝐨𝐨𝐧 𝐓𝐚𝐥𝐤𝐬
global.gp2 = 'https://chat.whatsapp.com/EUq0KSaqVDAG1NOakOuzzI?mode=ac_t'//
global.channel = 'https://whatsapp.com/channel/0029Vb5nxWWFHWq5CNFP5b21' //Canal Oficial 𝐃𝐞𝐥 𝐂𝐥𝐮𝐛
global.channel2 = 'https://whatsapp.com/channel/0029VbAa5sNCsU9Hlzsn651S' //Canal 𝐃𝐞𝐥 𝐇𝐨𝐬𝐭 𝐨𝐟𝐢𝐜𝐢𝐚𝐥
global.yt = 'https://dash.kurayamihost.dpdns.org/home' //𝐃𝐚𝐬𝐡 𝐃𝐞𝐥 𝐇𝐨𝐬𝐭
global.md = 'https://github.com/FELIX-OFC/MakiMD' //Github Oficial
global.correo = 'deymoon-club.vercel.app/'
global.cn ='https://whatsapp.com/channel/0029Vb5nxWWFHWq5CNFP5b21';

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363402362088282@newsletter',
}
global.multiplier = 70

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
