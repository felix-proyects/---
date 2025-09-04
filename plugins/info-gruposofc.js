const comandosValidos = [
  // Sistema
  'formarpareja5', 'afk', 'runtime', 'menu', 'help', 'update, 'asistenciabot', 'comandosbot', 'listadecomandos', 'menucompleto',
  // Grupos
  'enable', 'disable', 'staff',
  // Jadi-Bots
  'qr', 'code', 'setname', 'setbanner', 'setprimary',
  // AI
  'gemini', 'chatgpt', 'ia',
  // Anime
  'animelink', 'infoanime', 'topwaifus', 'wvideo', 'wimage', 'charinfo', 'winfo', 'waifuinfo', 'alisa', 'aihoshino', 'remcham', 'akira', 'akiyama', 'anna', 'asuna', 'ayuzawa', 'boruto', 'chiho', 'chitoge', 'deidara', 'erza', 'elaina', 'eba', 'emilia', 'hestia', 'hinata', 'inori', 'isuzu', 'itachi', 'itori', 'kaga', 'kagura', 'kaori', 'keneki', 'kotori', 'kurumitokisaki', 'madara', 'mikasa', 'miku', 'minato', 'naruto', 'nezuko', 'sagiri', 'sasuke', 'sakura',
  // Audio
  'bass', 'blown', 'deep', 'earrape', 'fast', 'fat', 'nightcore', 'reverse', 'robot', 'slow', 'smooth', 'tupai',
  // Buscador
  'githubsearch', 'google', 'mercadolibre', 'npmjs', 'tweetposts', 'tiktoksearch', 'xnxxsearch', 'imagen',
  // IMG
  'pinterest', 'waifu',
  // Transformador
  'tovideo', 'togifaud',
  // Sticker
  'toimg', 'qc', 's',
  // Tools
  'tts', 'fake', 'hd', 'ssweb', 'spamwa', 'inspect', 'inspeccionar', 'tourl', 'catbox',
  // Descargas
  'hentai', 'mediafire', 'ytmp4', 'fb', 'gitclone', 'ig', 'apkmod', 'spotify', 'musica', 'ytmp3', 'ytmp3doc', 'tiktok',
  // Fun
  'acertijo', 'gay', 'lesbiana', 'pajero', 'pajera', 'puto', 'puta', 'manco', 'manca', 'rata', 'prostituta', 'prostituto', 'apostar', 'consejo', 'dance', 'doxear', 'personalidad', 'piropo', 'pokedex', 'pregunta', 'reto', 'ruleta', 'ship', 'love', 'simi', 'bot', 'top', 'amistad', 'facto', 'meme', 'pajeame', 'formartrio', 'verdad',
  // Emox
  'agarrarnalgas', 'anal', 'culiar', 'angry', 'enojado', 'bath', 'bañarse', 'blowjob', 'mamada', 'blush', 'sonrojarse', 'chuparpata', 'cry', 'llorar', 'cuddle', 'acurrucarse', 'drunk', 'borracho', 'grabboobs', 'agarrartetas', 'hello', 'hola', 'hug', 'abrazar', 'kill', 'matar', 'kiss', 'besar', 'kiss2', 'besar2', 'love2', 'enamorada', 'patt', 'acariciar', 'penetrar', 'punch', 'golpear', 'sad', 'triste', 'scared', 'asustada', 'seduce', 'seducir', 'sexo', 'sex', 'sleep', 'dormir', 'violar', 'perra', 'follar',
  // Grupo
  'add', 'group', 'open', 'close', 'delete', 'demote', 'encuesta', 'tag', 'gp', 'invite', 'link', 'promote', 'revoke', 'invocar', 'kick', 'rentar',
  // Info
  'reglas', 'ping', 'sistema', 'speed', 'speedtest', 'status', 'grupos', 'script', 'reportar',
  // Fix
  'dsowner',
  // RPG
  'daily', 'levelup', 'minar', 'comprarpersonaje', 'repeat', 'rob2', 'rob', 'lb', 'banco',
  // Economía
  'miestatus', 'wallet', 'miexp', 'bal', 'trabajar', 'cajamisteriosa', 'transferirmonedas',
  // Ranking
  'jugadores', 'soccer', 'rcjugador',
  // Search
  'ytsearch',
  // Gacha
  'claim', 'rw', 'rollwaifu',
  // Grupos
  'rentar2',
  // Jadibot
  'bots', 'token', 'gettoken', 'serbottoken',
  // RG
  'profile', 'unreg',
  // Premium
  'comprarpremium',
  // Juegos
  'cajamisteriosa'
]

const PREFIJOS = ['#', '!', '.', '/']

let handler = async (m,fake, { conn }) => {
  // Solo si inicia con prefijo permitido
  const texto = m.text || ''
  const prefijo = PREFIJOS.find(p => texto.startsWith(p))
  if (!prefijo) return

  // Extrae el comando (sin prefijo y sin argumentos)
  const partes = texto.slice(prefijo.length).trim().split(/\s+/)
  const cmdUsuario = partes[0].toLowerCase()

  // Si el comando existe, no responde
  if (comandosValidos.includes(cmdUsuario)) return

  // Responde solo si el comando NO existe
  await m.reply(`☆ El comando ${prefijo}${cmdUsuario} No está disponible.\n> Usa #help para ver cuales lo están.`)
}

// Detecta cualquier texto con prefijo
handler.customPrefix = /^[#.!\/]/
handler.command = new RegExp('^.*$')
handler.fail = null
handler.exp = 0 // No da experiencia

export default handler