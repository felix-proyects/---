let handler = async (m, { conn }) => {
  try {
    // Nombre de usuario real
    let nombre = await conn.getName(m.sender);
    // Título del link
    let devby = `𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓭 𝓫𝔂 𝐃𝐞𝐲𝐦𝐨𝐨𝐧-𝐨𝐟𝐜 ❤️ | ${nombre}`;
    // Nombre del bot fijo y tipo fijo (puedes cambiar si quieres)
    let botname = 'Makima';
    let tipo = 'ofc';

    // MENÚ exactamente como lo pediste
    let menu = `𝐇𝐨𝐥𝐚, 𝐒𝐨𝐲 *${botname}* *[${tipo}]*

Aǫᴜɪ ᴇsᴛᴀ ʟᴀ ʟɪsᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs: 
╭━𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓭 𝓫𝔂 𝐃𝐞𝐲𝐦𝐨𝐨𝐧-𝐨𝐟𝐜 ❤️
┃Cᴏᴍᴀɴᴅᴏs ꨄ︎
┃deymoon-club.vercel.app/
┃Cᴀɴᴀʟ ᴏғᴄ ❦︎
┃https://whatsapp.com/channel/0029Vb5nxWWFHWq5CNFP5b21
╰━━━━━━━━━━
> C𝚛a 𝚄n Subbot con tu número de telefono usando #qr o #code

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮SISTEMA
┃ ┈➤ #formarpareja5
┃ ┈➤ #afk [alasan]
┃ ┈➤ #runtime
┃ ┈➤ #blocklist
┃ ┈➤ #owner
┃ ┈➤ #menu
┃ ┈➤ #menú
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮GRUPOS
┃ ┈➤ #desbanearbot
┃ ┈➤ #banearbot
┃ ┈➤ #enable <opción>
┃ ┈➤ #disable <opción>
┃ ┈➤ #staff
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮SUB BOTS
┃ ┈➤ #qr
┃ ┈➤ #code
┃ ┈➤ #setname [nombre]
┃ ┈➤ #setbanner [link]
┃ ┈➤ #setprimary [@Bot]
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮AI
┃ ┈➤ #gemini
┃ ┈➤ #chatgpt <texto>
┃ ┈➤ #ia <texto>
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮ANIME
┃ ┈➤ #animelink
┃ ┈➤ #infoanime
┃ ┈➤ #topwaifus [página]
┃ ┈➤ #wvideo <nombre del personaje>
┃ ┈➤ #wimage <nombre del personaje>
┃ ┈➤ #charinfo <nombre del personaje>
┃ ┈➤ #winfo <nombre del personaje>
┃ ┈➤ #waifuinfo <nombre del personaje>
┃ ┈➤ #alisa
┃ ┈➤ #aihoshino
┃ ┈➤ #remcham
┃ ┈➤ #akira
┃ ┈➤ #akiyama
┃ ┈➤ #anna
┃ ┈➤ #asuna
┃ ┈➤ #ayuzawa
┃ ┈➤ #boruto
┃ ┈➤ #chiho
┃ ┈➤ #chitoge
┃ ┈➤ #deidara
┃ ┈➤ #erza
┃ ┈➤ #elaina
┃ ┈➤ #eba
┃ ┈➤ #emilia
┃ ┈➤ #hestia
┃ ┈➤ #hinata
┃ ┈➤ #inori
┃ ┈➤ #isuzu
┃ ┈➤ #itachi
┃ ┈➤ #itori
┃ ┈➤ #kaga
┃ ┈➤ #kagura
┃ ┈➤ #kaori
┃ ┈➤ #keneki
┃ ┈➤ #kotori
┃ ┈➤ #kurumitokisaki
┃ ┈➤ #madara
┃ ┈➤ #mikasa
┃ ┈➤ #miku
┃ ┈➤ #minato
┃ ┈➤ #naruto
┃ ┈➤ #nezuko
┃ ┈➤ #sagiri
┃ ┈➤ #sasuke
┃ ┈➤ #sakura
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮AUDIO
┃ ┈➤ #bass [vn]
┃ ┈➤ #blown [vn]
┃ ┈➤ #deep [vn]
┃ ┈➤ #earrape [vn]
┃ ┈➤ #fast [vn]
┃ ┈➤ #fat [vn]
┃ ┈➤ #nightcore [vn]
┃ ┈➤ #reverse [vn]
┃ ┈➤ #robot [vn]
┃ ┈➤ #slow [vn]
┃ ┈➤ #smooth [vn]
┃ ┈➤ #tupai [vn]
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮BUSCADOR
┃ ┈➤ #pornhubsearch
┃ ┈➤ #githubsearch
┃ ┈➤ #google <búsqueda>
┃ ┈➤ #mercadolibre <búsqueda>
┃ ┈➤ #npmjs
┃ ┈➤ #tweetposts
┃ ┈➤ #tiktoksearch <txt>
┃ ┈➤ #xnxxsearch <query>
┃ ┈➤ #imagen <query>
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮IMG
┃ ┈➤ #pinterest <término>
┃ ┈➤ #waifu
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮TRANSFORMADOR
┃ ┈➤ #tovideo
┃ ┈➤ #togifaud
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮STICKER
┃ ┈➤ #toimg (reply)
┃ ┈➤ #qc
┃ ┈➤ #take *<nombre>|<autor>*
┃ ┈➤ #sticker <imagen|video|url>
┃ ┈➤ #stiker <imagen|video|url>
┃ ┈➤ #s <imagen|video|url>
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮TOOLS
┃ ┈➤ #tts <lang> <teks>
┃ ┈➤ #fake
┃ ┈➤ #hd
┃ ┈➤ #ssweb
┃ ┈➤ #ss
┃ ┈➤ #trad
┃ ┈➤ #spamwa <number>|<mesage>|<no of messages>
┃ ┈➤ #IPdoxx
┃ ┈➤ #nuevafotochannel
┃ ┈➤ #nosilenciarcanal
┃ ┈➤ #silenciarcanal
┃ ┈➤ #noseguircanal
┃ ┈➤ #seguircanal
┃ ┈➤ #avisoschannel
┃ ┈➤ #resiviravisos
┃ ┈➤ #inspect
┃ ┈➤ #inspeccionar
┃ ┈➤ #eliminarfotochannel
┃ ┈➤ #reactioneschannel
┃ ┈➤ #reaccioneschannel
┃ ┈➤ #nuevonombrecanal
┃ ┈➤ #nuevadescchannel
┃ ┈➤ #tourl
┃ ┈➤ #tourl2
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮DESCARGAS
┃ ┈➤ #hentai
┃ ┈➤ #mediafire
┃ ┈➤ #ytmp4 <url>
┃ ┈➤ #facebook
┃ ┈➤ #fb
┃ ┈➤ #gitclone *<url git>*
┃ ┈➤ #instagram
┃ ┈➤ #ig
┃ ┈➤ #apkmod
┃ ┈➤ #spotify *<nombre>*
┃ ┈➤ #imagen <query>
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮DOWNLOADER
┃ ┈➤ #undefined
┃ ┈➤ #musica *<búsqueda>*
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮YTMP3
┃ ┈➤ #ytmp3
┃ ┈➤ #ytmp3doc
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮DL
┃ ┈➤ #tiktok
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮FUN
┃ ┈➤ #acertijo
┃ ┈➤ #gay <@tag> | <nombre>
┃ ┈➤ #lesbiana <@tag> | <nombre>
┃ ┈➤ #pajero <@tag> | <nombre>
┃ ┈➤ #pajera <@tag> | <nombre>
┃ ┈➤ #puto <@tag> | <nombre>
┃ ┈➤ #puta <@tag> | <nombre>
┃ ┈➤ #manco <@tag> | <nombre>
┃ ┈➤ #manca <@tag> | <nombre>
┃ ┈➤ #rata <@tag> | <nombre>
┃ ┈➤ #prostituta <@tag> | <nombre>
┃ ┈➤ #prostituto <@tag> | <nombre>
┃ ┈➤ #apostar *<cantidad>*
┃ ┈➤ #consejo
┃ ┈➤ #dance *<@user>*
┃ ┈➤ #doxear
┃ ┈➤ #formarpareja5
┃ ┈➤ #enamorada @tag
┃ ┈➤ #math
┃ ┈➤ #meme
┃ ┈➤ #personalidad
┃ ┈➤ #piropo
┃ ┈➤ #pokedex *<pokemon>*
┃ ┈➤ #ppt
┃ ┈➤ #pregunta
┃ ┈➤ #reto
┃ ┈➤ #ruleta *<cantidad> <color>*
┃ ┈➤ #ship
┃ ┈➤ #love
┃ ┈➤ #simi
┃ ┈➤ #bot
┃ ┈➤ #top *<texto>*
┃ ┈➤ #zodiac *2002 02 25*
┃ ┈➤ #amistad
┃ ┈➤ #facto
┃ ┈➤ #memev
┃ ┈➤ #pajeame
┃ ┈➤ #formartrio @usuario1 @usuario2
┃ ┈➤ #verdad
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮EMOX
┃ ┈➤ #agarrarnalgas @tag
┃ ┈➤ #anal/culiar @tag
┃ ┈➤ #angry/enojado @tag
┃ ┈➤ #bath/bañarse @tag
┃ ┈➤ #blowjob/mamada @tag
┃ ┈➤ #blush/sonrojarse @tag
┃ ┈➤ #chuparpata @tag
┃ ┈➤ #cry/llorar @tag
┃ ┈➤ #cuddle/acurrucarse @tag
┃ ┈➤ #drunk/borracho @tag
┃ ┈➤ #grabboobs/agarrartetas @tag
┃ ┈➤ #hello/hola @tag
┃ ┈➤ #hug/abrazar @tag
┃ ┈➤ #kill/matar @tag
┃ ┈➤ #kiss/besar @tag
┃ ┈➤ #kiss2/besar2 @tag
┃ ┈➤ #love2/enamorada @tag
┃ ┈➤ #patt/acariciar @tag
┃ ┈➤ #penetrar @user
┃ ┈➤ #punch/golpear @tag
┃ ┈➤ #sad/triste @tag
┃ ┈➤ #scared/asustada @tag
┃ ┈➤ #seduce/seducir @tag
┃ ┈➤ #sexo/sex @tag
┃ ┈➤ #sleep/dormir @tag
┃ ┈➤ #violar/perra @tag
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮NSFWS
┃ ┈➤ #follar @tag
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮GRUPO
┃ ┈➤ #add
┃ ┈➤ #group open / close
┃ ┈➤ #grupo abrir / cerrar
┃ ┈➤ #delete
┃ ┈➤ #demote
┃ ┈➤ #encuesta <text|text2>
┃ ┈➤ #undefined
┃ ┈➤ #hidetag
┃ ┈➤ #infogrupo
┃ ┈➤ #invite *<numero>*
┃ ┈➤ #link
┃ ┈➤ #listadv
┃ ┈➤ #promote
┃ ┈➤ #revoke
┃ ┈➤ #tagall *<mesaje>*
┃ ┈➤ #invocar *<mesaje>*
┃ ┈➤ #kick
┃ ┈➤ #rentar
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮INFO
┃ ┈➤ #reglas
┃ ┈➤ #ds
┃ ┈➤ #fixmsgespera
┃ ┈➤ #ping
┃ ┈➤ #sistema
┃ ┈➤ #speed
┃ ┈➤ #speedtest
┃ ┈➤ #status
┃ ┈➤ #grupos
┃ ┈➤ #script
┃ ┈➤ #reportar
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮OWNER
┃ ┈➤ #expired *<días>*
┃ ┈➤ #addprem [@user] <days>
┃ ┈➤ #autoadmin
┃ ┈➤ #copia
┃ ┈➤ #banuser <@tag> <razón>
┃ ┈➤ #broadcast
┃ ┈➤ #bc
┃ ┈➤ #broadcastgroup
┃ ┈➤ #bcgc
┃ ┈➤ #bcgc2
┃ ┈➤ #bcg
┃ ┈➤ #cheat
┃ ┈➤ #cleartmp
┃ ┈➤ #delprem <@user>
┃ ┈➤ #dsowner
┃ ┈➤ #>
┃ ┈➤ #=>
┃ ┈➤ #$
┃ ┈➤ #fetch
┃ ┈➤ #get
┃ ┈➤ #ip <alamat ip>
┃ ┈➤ #join <link>
┃ ┈➤ #grupocrear <nombre>
┃ ┈➤ #nuevabiobot <teks>
┃ ┈➤ #nuevafotobot *<imagen>*
┃ ┈➤ #nuevonombrebot <teks>
┃ ┈➤ #resetpersonajes
┃ ┈➤ #undefined
┃ ┈➤ #restart
┃ ┈➤ #unbanuser <@tag>
┃ ┈➤ #update
┃ ┈➤ #actualizar
┃ ┈➤ #enable <opción>
┃ ┈➤ #disable <opción>
┃ ┈➤ #añadirmonedas @usuario cantidad
┃ ┈➤ #groups
┃ ┈➤ #grouplist
┃ ┈➤ #reunion
┃ ┈➤ #meeting
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮FIX
┃ ┈➤ #dsowner
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮RPG
┃ ┈➤ #duelo @usuario <apuesta> [tuPersonaje] [personajeRival]
┃ ┈➤ #sacrificar <nombre>
┃ ┈➤ #cazar
┃ ┈➤ #daily
┃ ┈➤ #claim
┃ ┈➤ #cambiarexp <cantidad>
┃ ┈➤ #explorar
┃ ┈➤ #invocacion
┃ ┈➤ #levelup
┃ ┈➤ #listarpersonajes
┃ ┈➤ #logros
┃ ┈➤ #minar
┃ ┈➤ #miestatus
┃ ┈➤ #mimonedas
┃ ┈➤ #miexp
┃ ┈➤ #mispersonajes
┃ ┈➤ #mispjs
┃ ┈➤ #inventario
┃ ┈➤ #comprarpersonaje <nombre>
┃ ┈➤ #reinado
┃ ┈➤ #reinado reset
┃ ┈➤ #rob2
┃ ┈➤ #rob
┃ ┈➤ #toppersonajes
┃ ┈➤ #trabajar
┃ ┈➤ #work
┃ ┈➤ #invasionzombie
┃ ┈➤ #menurpg
┃ ┈➤ #tenertodo
┃ ┈➤ #lb [página]
┃ ┈➤ #bank
┃ ┈➤ #banco
┃ ┈➤ #cajamisteriosa
┃ ┈➤ #transferirmonedas *@user cantidad*
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮ECON
┃ ┈➤ #cambiarexp <cantidad>
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮ECONOMÍA
┃ ┈➤ #listarpersonajes
┃ ┈➤ #miestatus
┃ ┈➤ #mimonedas
┃ ┈➤ #miexp
┃ ┈➤ #mispersonajes
┃ ┈➤ #mispjs
┃ ┈➤ #inventario
┃ ┈➤ #trabajar
┃ ┈➤ #work
┃ ┈➤ #cajamisteriosa
┃ ┈➤ #transferirmonedas *@user cantidad*
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮RANKING
┃ ┈➤ #reinado
┃ ┈➤ #reinado reset
┃ ┈➤ #toppersonajes
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮SEARCH
┃ ┈➤ #ytsearch *<texto>*
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮GACHA
┃ ┈➤ #claim
┃ ┈➤ #ver
┃ ┈➤ #rw
┃ ┈➤ #rollwaifu
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮GRUPOS
┃ ┈➤ #rentar2 *<link>*
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮JADIBOT
┃ ┈➤ #bots
┃ ┈➤ #token
┃ ┈➤ #gettoken
┃ ┈➤ #serbottoken
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮RG
┃ ┈➤ #profile
┃ ┈➤ #unreg
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮PREMIUM
┃ ┈➤ #comprarpremium <cantidad> <unidad>
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮JUEGOS
┃ ┈➤ #cajamisteriosa
╰━━━━━━━━━━━━━
`;

    await conn.sendMessage(m.chat, {
      image: { url: 'https://qu.ax/XkPVZ.jpg' },
      caption: menu,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          title: devby,
          sourceUrl: 'https://deymoon-club.vercel.app/',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });

    await m.react('🩵');
  } catch (e) {
    await m.reply(`✘ Ocurrió un error cuando la lista de comandos se iba a enviar.\n\n${e}`, m);
    await m.react('❌');
  }
};

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = ['menu', 'help', 'menú', 'asistenciabot', 'comandosbot', 'listadecomandos', 'menucompleto'];
handler.register = true;

export default handler;