//* Código creado por Félix, no quites créditos *//

let handler = async (m, { conn, command, usedPrefix }) => {
  try {
    // Prefijos válidos
    const prefijos = ['#', '!', '.'];

    // Si el mensaje NO empieza con un prefijo válido, no hace nada
    if (!prefijos.includes(usedPrefix)) return;

    // Lista de comandos válidos
    const comandosValidos = [
      'formarpareja5','afk','runtime','blocklist','owner','menu','menú',
      'desbanearbot','banearbot','enable','disable','staff','qr','code','setname',
      'setbanner','setprimary','gemini','chatgpt','ia','animelink','infoanime','topwaifus',
      'wvideo','wimage','charinfo','winfo','waifuinfo','alisa','aihoshino','remcham','akira',
      'akiyama','anna','asuna','ayuzawa','boruto','chiho','chitoge','deidara','erza','elaina',
      'eba','emilia','hestia','hinata','inori','isuzu','itachi','itori','kaga','kagura','kaori',
      'keneki','kotori','kurumitokisaki','madara','mikasa','miku','minato','naruto','nezuko',
      'sagiri','sasuke','sakura','bass','blown','deep','earrape','fast','fat','nightcore',
      'reverse','robot','slow','smooth','tupai','pornhubsearch','githubsearch','google',
      'mercadolibre','npmjs','tweetposts','tiktoksearch','xnxxsearch','imagen','pinterest',
      'waifu','tovideo','togifaud','toimg','qc','take','sticker','stiker','s','tts','fake','hd',
      'ssweb','ss','trad','spamwa','IPdoxx','nuevafotochannel','nosilenciarcanal','silenciarcanal',
      'noseguircanal','seguircanal','avisoschannel','resiviravisos','inspect','inspeccionar',
      'eliminarfotochannel','reactioneschannel','reaccioneschannel','nuevonombrecanal',
      'nuevadescchannel','tourl','tourl2','hentai','mediafire','ytmp4','facebook','fb','gitclone',
      'instagram','ig','apkmod','spotify','undefined','musica','ytmp3','ytmp3doc','tiktok',
      'acertijo','gay','lesbiana','pajero','pajera','puto','puta','manco','manca','rata',
      'prostituta','prostituto','apostar','consejo','dance','doxear','enamorada','math','meme',
      'personalidad','piropo','pokedex','ppt','pregunta','reto','ruleta','ship','love','simi',
      'bot','top','zodiac','amistad','facto','memev','pajeame','formartrio','verdad',
      'agarrarnalgas','anal','culiar','angry','enojado','bath','bañarse','blowjob','mamada',
      'blush','sonrojarse','chuparpata','cry','llorar','cuddle','acurrucarse','drunk','borracho',
      'grabboobs','agarrartetas','hello','hola','hug','abrazar','kill','matar','kiss','besar',
      'kiss2','besar2','love2','patt','acariciar','penetrar','punch','golpear','sad','triste',
      'scared','asustada','seduce','seducir','sexo','sex','sleep','dormir','violar','perra',
      'follar','add','group','grupo','delete','demote','encuesta','hidetag','infogrupo','invite',
      'link','listadv','promote','revoke','tagall','invocar','kick','rentar','reglas','ds',
      'fixmsgespera','ping','sistema','speed','speedtest','status','grupos','script','reportar',
      'expired','addprem','autoadmin','copia','banuser','broadcast','bc','broadcastgroup','bcgc',
      'bcgc2','bcg','cheat','cleartmp','delprem','dsowner','>','=>','$','fetch','get','ip','join',
      'grupocrear','nuevabiobot','nuevafotobot','nuevonombrebot','resetpersonajes','restart',
      'unbanuser','update','actualizar','añadirmonedas','groups','grouplist','reunion','meeting',
      'duelo','sacrificar','cazar','daily','claim','cambiarexp','explorar','invocacion','levelup',
      'listarpersonajes','logros','minar','miestatus','mimonedas','miexp','mispersonajes','mispjs',
      'inventario','comprarpersonaje','reinado','rob2','rob','toppersonajes','trabajar','work',
      'invasionzombie','menurpg','tenertodo','lb','bank','banco','cajamisteriosa','transferirmonedas',
      'ytsearch','claim','ver','rw','rollwaifu','rentar2','bots','token','gettoken','serbottoken',
      'profile','unreg','comprarpremium','cajamisteriosa'
    ];

    // Si el comando no existe en la lista, responde el mensaje de error con contexto canal/newsletter
    if (!comandosValidos.includes(command)) {
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

// Regex para capturar comandos que no sean los válidos y solo si hay prefijo
handler.customPrefix = /^([#.!])[a-zA-Z0-9]+$/i;
handler.command = new RegExp; // Para que se ejecute con cualquier texto que empiece con el prefijo
handler.register = false; // Opcional

export default handler;