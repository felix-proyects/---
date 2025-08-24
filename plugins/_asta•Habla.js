//* Código creado por Félix, no quites créditos *//

let handler = async (m, { conn, command, usedPrefix }) => {
  try {
    // LISTA DE TODOS LOS COMANDOS EXISTENTES (sin repetidos y sin categorías)
    const comandosValidos = [
      // SISTEMA
      'formarpareja5','afk','runtime','blocklist','owner','menu','menú',
      // GRUPOS
      'desbanearbot','banearbot','enable','disable','staff',
      // SUB BOTS
      'qr','code','setname','setbanner','setprimary',
      // AI
      'gemini','chatgpt','ia',
      // ANIME
      'animelink','infoanime','topwaifus','wvideo','wimage','charinfo','winfo','waifuinfo','alisa','aihoshino','remcham','akira','akiyama',
      'anna','asuna','ayuzawa','boruto','chiho','chitoge','deidara','erza','elaina','eba','emilia','hestia','hinata','inori','isuzu','itachi',
      'itori','kaga','kagura','kaori','keneki','kotori','kurumitokisaki','madara','mikasa','miku','minato','naruto','nezuko','sagiri','sasuke',
      'sakura',
      // AUDIO
      'bass','blown','deep','earrape','fast','fat','nightcore','reverse','robot','slow','smooth','tupai',
      // BUSCADOR
      'pornhubsearch','githubsearch','google','mercadolibre','npmjs','tweetposts','tiktoksearch','xnxxsearch','imagen',
      // IMG
      'pinterest','waifu',
      // TRANSFORMADOR
      'tovideo','togifaud',
      // STICKER
      'toimg','qc','take','sticker','stiker','s',
      // TOOLS
      'tts','fake','hd','ssweb','ss','trad','spamwa','IPdoxx','nuevafotochannel','nosilenciarcanal','silenciarcanal','noseguircanal','seguircanal',
      'avisoschannel','resiviravisos','inspect','inspeccionar','eliminarfotochannel','reactioneschannel','reaccioneschannel','nuevonombrecanal',
      'nuevadescchannel','tourl','tourl2',
      // DESCARGAS
      'hentai','mediafire','ytmp4','facebook','fb','gitclone','instagram','ig','apkmod','spotify',
      // DOWNLOADER
      'undefined','musica',
      // YTMP3
      'ytmp3','ytmp3doc',
      // DL
      'tiktok',
      // FUN
      'acertijo','gay','lesbiana','pajero','pajera','puto','puta','manco','manca','rata','prostituta','prostituto','apostar','consejo','dance',
      'doxear','formarpareja5','enamorada','math','meme','personalidad','piropo','pokedex','ppt','pregunta','reto','ruleta','ship','love','simi',
      'bot','top','zodiac','amistad','facto','memev','pajeame','formartrio','verdad',
      // EMOX
      'agarrarnalgas','anal','culiar','angry','enojado','bath','bañarse','blowjob','mamada','blush','sonrojarse','chuparpata','cry','llorar',
      'cuddle','acurrucarse','drunk','borracho','grabboobs','agarrartetas','hello','hola','hug','abrazar','kill','matar','kiss','besar','kiss2',
      'besar2','love2','enamorada','patt','acariciar','penetrar','punch','golpear','sad','triste','scared','asustada','seduce','seducir','sexo',
      'sex','sleep','dormir','violar','perra',
      // NSFWS
      'follar',
      // GRUPO
      'add','group','grupo','delete','demote','encuesta','hidetag','infogrupo','invite','link','listadv','promote','revoke','tagall','invocar',
      'kick','rentar',
      // INFO
      'reglas','ds','fixmsgespera','ping','sistema','speed','speedtest','status','grupos','script','reportar',
      // OWNER
      'expired','addprem','autoadmin','copia','banuser','broadcast','bc','broadcastgroup','bcgc','bcgc2','bcg','cheat','cleartmp','delprem',
      'dsowner','>','=>','$','fetch','get','ip','join','grupocrear','nuevabiobot','nuevafotobot','nuevonombrebot','resetpersonajes','restart',
      'unbanuser','update','actualizar','añadirmonedas','groups','grouplist','reunion','meeting',
      // FIX
      'dsowner',
      // RPG
      'duelo','sacrificar','cazar','daily','claim','cambiarexp','explorar','invocacion','levelup','listarpersonajes','logros','minar','miestatus',
      'mimonedas','miexp','mispersonajes','mispjs','inventario','comprarpersonaje','reinado','rob2','rob','toppersonajes','trabajar','work',
      'invasionzombie','menurpg','tenertodo','lb','bank','banco','cajamisteriosa','transferirmonedas',
      // ECON
      'cambiarexp',
      // ECONOMÍA
      'listarpersonajes','miestatus','mimonedas','miexp','mispersonajes','mispjs','inventario','trabajar','work','cajamisteriosa','transferirmonedas',
      // RANKING
      'reinado','toppersonajes',
      // SEARCH
      'ytsearch',
      // GACHA
      'claim','ver','rw','rollwaifu',
      // GRUPOS (extra)
      'rentar2',
      // JADIBOT
      'bots','token','gettoken','serbottoken',
      // RG
      'profile','unreg',
      // PREMIUM
      'comprarpremium',
      // JUEGOS
      'cajamisteriosa'
    ];

    // Si el comando no existe en la lista, responde el mensaje de error con contexto canal/newsletter
    if (!comandosValidos.includes(command)) {
      // Contexto canal/newsletter como tu menú principal
      const dev = 'Félix Manuel';
      const redes = 'https://dash.kurayamihost.dpdns.org/home';
      const channelRD = { id: "120363418804796632@newsletter", name: "Kurayami Host" };
      let perfil = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://files.catbox.moe/mqtxvp.jpg');

      await conn.sendMessage(m.chat, {
        text: `☆ El comando *${usedPrefix}${command}* no existe.\n> Para ver la lista de comandos usa:\n- #menu`,
        contextInfo: {
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: channelRD.id,
            newsletterName: channelRD.name,
            serverMessageId: -1,
          },
          forwardingScore: 999,
          externalAdReply: {
            title: 'Comando inexistente',
            body: dev,
            thumbnailUrl: perfil,
            sourceUrl: redes,
            mediaType: 1,
            renderLargerThumbnail: false,
          },
        }
      }, { quoted: m });
    }
  } catch (e) {
    await m.reply(`✘ Ocurrió un error detectando comandos inexistentes.\n\n${e}`, m);
  }
};

// Regex para capturar comandos que no sean los válidos
handler.customPrefix = /^([a-zA-Z0-9]+)$/i;
handler.command = new RegExp; // Para que se ejecute con cualquier texto que empiece con el prefijo
handler.register = false; // Opcional

export default handler;