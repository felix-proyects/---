import fs from 'fs';
import path, { join } from 'path';
import { fileURLToPath } from 'url';
import { smsg } from './lib/simple.js';
import { format } from 'util';
import { unwatchFile, watchFile } from 'fs';
import chalk from 'chalk';
import fetch from 'node-fetch';

const { proto } = (await import('@whiskeysockets/baileys')).default;
const isNumber = x => typeof x === 'number' && !isNaN(x);
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
  clearTimeout(this);
  resolve();
}, ms));

export async function handler(chatUpdate) {
  this.msgqueque = this.msgqueque || [];
  this.uptime = this.uptime || Date.now();
  if (!chatUpdate) return;
  this.pushMessage(chatUpdate.messages).catch(console.error);
  let m = chatUpdate.messages[chatUpdate.messages.length - 1];
  if (!m) return;
  if (global.db.data == null) await global.loadDatabase();

  try {
    m = smsg(this, m) || m;
    if (!m) return;
    m.exp = 0;
    m.coin = false;
    
    let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender];
    const detectwhat = m.sender.includes('@lid') ? '@lid' : '@s.whatsapp.net';
    const isROwner = [...global.owner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + detectwhat).includes(m.sender);
    const isOwner = isROwner || m.fromMe;
    const isMods = isROwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + detectwhat).includes(m.sender);
    const isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + detectwhat).includes(m.sender) || _user.premium == true;

    let isBotPrem = isOwner;
    if (!isBotPrem) { 
        try {
            const botJid = this.user.jid.split('@')[0];
            const premiumFilePath = path.join('./JadiBots', botJid, 'premium.json');
            if (fs.existsSync(premiumFilePath)) {
                const premiumConfig = JSON.parse(fs.readFileSync(premiumFilePath, 'utf8'));
                isBotPrem = premiumConfig.premiumBot === true;
            }
        } catch (e) {
            console.error('Error al verificar el estado premium del bot:', e);
        }
    }

    if (m.isBaileys) return;
    if (opts['nyimak']) return;
    if (!isROwner && opts['self']) return;
    if (opts['swonly'] && m.chat !== 'status@broadcast') return;
    if (typeof m.text !== 'string') m.text = '';

    for (let name in global.plugins) {
      let plugin = global.plugins[name];
      if (!plugin) continue;
      if (plugin.disabled) continue;

      if ((usedPrefix = (match[0] || '')[0])) {
        let noPrefix = m.text.replace(usedPrefix, '');
        let [command, ...args] = noPrefix.trim().split` `.filter(v => v);
        
        if (plugin.botprem && !isBotPrem) {
          fail('botprem', m, this, usedPrefix, command);
          continue;
        }

        if (plugin.premium && !isPrems) { 
          fail('premium', m, this, usedPrefix, command);
          continue;
        }
        if (plugin.group && !m.isGroup) { 
          fail('group', m, this, usedPrefix, command);
          continue;
        } else if (plugin.botAdmin && !isBotAdmin) { 
          fail('botAdmin', m, this, usedPrefix, command);
          continue;
        } else if (plugin.admin && !isAdmin) { 
          fail('admin', m, this, usedPrefix, command);
          continue;
        }

        let extra = {
          match, usedPrefix, noPrefix, _args, args, command, text, conn: this, participants, groupMetadata, user, bot, isROwner, isOwner, isRAdmin, isAdmin, isBotAdmin, isPrems, isBotPrem, chatUpdate, __dirname: ___dirname, __filename
        };
        
        try {
          await plugin.call(this, m, extra);
          if (!isPrems) m.coin = m.coin || plugin.coin || false;
        } catch (e) {
        
        } finally {
        
        }
        break; 
      }} 
  } catch (e) {
    console.error(e);
  } finally {
  
  }
}

global.dfail = (type, m, conn, usedPrefix, command) => {

    const msg = {
        rowner: '「🩵」Este comando solo puede ser usado por mi creador.\n\n> Félix Manuel',
        owner: '「💎」Este comando solo puede ser usado por mi creador',
        premium: '「🩵」 Este comando solo puede ser usado por los usuarios premiums.',
        botprem: '「💥」Este comando solo está disponible para bots premium.',
        private: '「💎」Este comando solo puede ser usado en chats privados.',
        admin: '「🩵」Este comando solo puede ser usado por admins.',
        botAdmin: '「💎」Para usar este comando, debo ser admin del grupo.',
        unreg: '「🩵」¡Hey! no estas registrado, registrate para usar mis comandos\n\n/Reg nombre.edad\n\n! Ejemplo: _/Reg Félix.14_',
        restrict: '「💎」Este comando fue desactivado por mi Creador\n\n> Félix Manuel.'
    }[type];

    if (msg)
        return conn.reply(m.chat, msg, m, { contextInfo: fake }).then(() => conn.sendMessage(m.chat, { react: { text: '✖️', key: m.key } }));

}
