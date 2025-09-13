import fs from 'fs'
import { join } from 'path'

let handler = async (m, { conn }) => {
  try {
    let taguser = '@' + m.sender.split('@')[0]
    let nombreBot = 'Tanjiro Kamado'
    let bannerFinal = 'https://qu.ax/DKDve.jpg'

    const botActual = conn.user?.jid?.split('@')[0]?.replace(/\D/g, '')
    const configPath = join('./JadiBots', botActual || '', 'config.json')
    if (botActual && fs.existsSync(configPath)) {
      try {
        const config = JSON.parse(fs.readFileSync(configPath))
        if (config.name) nombreBot = config.name
        if (config.banner) bannerFinal = config.banner
      } catch (e) {
        console.error(e)
      }
    }

    const tipo = conn.user?.jid === global.conn?.user?.jid ? '(𝐏𝐫𝐞𝐦-𝐁𝐨𝐭)' : '(𝐒𝐮𝐛-𝐁𝐨𝐭)'
    const devby = `${nombreBot}, ${dev}`

    let menu = `𝐇𝐨𝐥𝐚! 𝐒𝐨𝐲 *${nombreBot}* *${tipo}*
Aǫᴜɪ ᴛɪᴇɴᴇs ʟᴀ ʟɪsᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs: 
╭┈ ↷
┃Usuario: *${taguser}*
┃Baileys: RubyHoshinoBails
┃Comandos: 221
┃Tokens Usados: 3
┃Canal: https://whatsapp.com/channel/0029VbAscL4Fcow56wUp5b1Z
╰━━━━━━━━━━
> Crea un Sub-Bot con tu número de telefono usando #qr o #code

 ╭ֹ┈ ⵿✎ SISTEMA
> Herramientas para convivir.

❒ #formarpareja5
> Forma 5 parejas a lo random.
❒ #afk [alasan]
> Pon un mensaje de ausencia.
❒ #runtime
> Mira el tiempo activo del bot.
❒ #menu
> Mira la lista de comandos. 


 ╭ֹ┈ ⵿❀⵿ ┈╮GRUPOS
> Comandos para grupos.

❒ #staff
> Mira los admins del grupo.
❒ #leave
> Saca al bot de tu grupo.
❏ #add
> El bot añade a alguien al grupo. 
❏ #delete
> Elimina un mensaje de alguien en el grupo.
❏ #demote
> Quita a alguien de admin del grupo. 
❏ #encuesta <text|text2>
> Has una encuesta en el grupo.
❏ #tag
> Envía un mensaje que mensiona al grupo sin poner los @.
❏ #gp
> Mira la información del grupo.
❏ #invite *<numero>*
> Envía el enlace de invitación del grupo a alguien.
❏ #link
> El bot envía el enlace del grupo.
❏ #promote
> Dale a alguien la administración en el grupo.
❏ #revoke
> Quita a alguien de la administración del grupo.
❏ #kick
> Expulsa una persona del grupo.
❏ #rentar
> Renta tu grupo.


 ╭ֹ┈ ⵿❀⵿ ┈╮JADI - BOTS
> Comandos para los bots.

❒ #qr
> Conectate como Sub-Bot mediante codigo qr.
❒ #code
> Conectate como Sub-Bot mediante código de  8 dígitos.
❒ #setname [nombre]
> Cambia el nombre del bot.
❒ #setbanner [link]
> Cambia la foto del bot.
❒ #setprimary [@Bot]
> Pon un bot como principal en el grupo.
❒ #join
> Únete a un grupo. 
❒ #sockets 
> Mira cuantos bots hay activos. 
❏ #token
> Mira cual es tu token  de Subbot.
❏ #gettoken
> Crea un token de Subbot.
❏ #serbottoken
> Vuelve a activar tu Sub-Bot con un token de subbot.


 ╭ֹ┈ ⵿❀⵿ ┈╮ANIME
> Comandos de anime.

❒ #animelink
> Mira diferentes links de animes.
❒ #infoanime
> Mira información de animes.
❒ #topwaifus [página]
> Mira el top de las waifus más usadas.
❒ #wvideo <nombre del personaje>
> Mira videos de algún personaje de anime.
❒ #wimage <nombre del personaje>
< Convierte algunas waifus en imagen.
❒ #charinfo <nombre del personaje>
> Mira información de charangas.
❒ #winfo <nombre del personaje>
> Mira más información de waifus.
❒ #waifuinfo <nombre del personaje>
> Mira información de un anime en especifico.
❒ #alisa
> Mira fotos de este anime.
❒ #aihoshino
> Mira fotos de este anime.
❒ #remcham
> Mira fotos de este anime.
❒ #akira
> Mira fotos de este anime.
❒ #akiyama
> Mira fotos de este anime.
❒ #anna
> Mira fotos de este anime.
❒ #asuna
> Mira fotos de este anime.
❒ #ayuzawa
> Mira fotos de este anime.
❒ #boruto
> Mira fotos de este anime
❒ #chiho
> Mira fotos de este anime.
❒ #chitoge
> Mira fotos de este anime.
❒ #deidara
> Mira fotos de este anime.
❒ #erza
> Mira fotos de este anime.
❒ #elaina
> Mira fotos de este anime.
❒ #eba
> Mira fotos de este anime.
❒ #emilia
> Mira fotos de este anime.
❒ #hestia
> Mira fotos de este anime.
❒ #hinata
> Mira fotos de este anime.
❒ #inori
> Mira fotos de este anime.
❒ #isuzu
> Mira fotos de este anime.
❒ #itachi
> Mira fotos de este anime.
❒ #itori
> Mira fotos de este anime.
❒ #kaga
> Mira fotos de este anime.
❒ #kagura
> Mira fotos de este anime.
❒ #kaori
> Mira fotos de este anime.
❒ #keneki
> Mira fotos de este anime.
❒ #kotori
> Mira fotos de este anime.
❒ #kurumitokisaki
> Mira fotos de este anime.#madara
❒ #mikasa
> Mira fotos de este anime.
❒ #miku
> Mira fotos de este anime.
❒ #minato
> Mira fotos de este anime.
❒ #naruto
> Mira fotos de este anime.
❒ #nezuko
> Mira fotos de este anime.
❒ #sagiri 
> Mira fotos de este anime.
❒ #sasuke
> Mira fotos de este anime.
❒ #sakura

 ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮BUSCADOR
> Comandos de búsquedas.

❏ #githubsearch
> Busca repositorios de github.
❏ #google <búsqueda>
> Has búsquedas en Google.
❏ #mercadolibre <búsqueda>
> Has búsquedas del mercado libre.
❏ #npmjs
> Busca librerías.
❏ #tweetposts
> Busca desde esta app.
❏ #tiktoksearch <txt>
> Busca a lo random en tiktok.
❏ #xnxxsearch <query>
> Busca nopor.
❏ #imagen <query>
> Busca imágenes.
❏ #pinterest <término>
> Busca imágenes de Pinterest.
❏ #waifu
> Reclama una waifu.
❏ #tovideo
> Convierte sticker en video.
❏ #togifaud
> Convierte sticker en fouds.

 ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮STICKER
> Comandos para convertir tus cosas en Stickers.

❏ #toimg (reply)
> Convierte sticker en fotos.
❏ #qc
> Crea Stickers con letras.
❏ #s <imagen|video|url>
> Crea Stickers de diferentes maneras.
 ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮TOOLS
> Comandos para herramientas de juego.

❏ #tts <lang> <teks>
> Convierte textos en audios.
❏ #fake
> Crea textos falsos.
❏ #hd
> Mejora la calidad de una imagen.
❏ #ssweb
> Busca la información de una web.
❏ #spamwa <number>|<mesage>|<no of messages>
> Hasle spam al privado de un usuario.
❏ #inspect
> Mira la información junto al ID de un canal.
❏ #inspeccionar
Mira la información junto al ID de un grupo.
❏ #tourl
> Convierte videos en link.
❏ #catbox
> Convierte fotos en link.

 ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮DESCARGAS
> Comandos de descargas.

❏ #hentai
> Descarga hentai.
❏ #mediafire
> Descarga cosas de mediafire.
❏ #ytmp4 <url>
> Descarga desde Mp4 de YouTube.
❏ #fb
> Descarga videos de Facebook.
❏ #gitclone *<url git>*
> Descarga un repositorio de github.
❏ #ig
> Descarga videos de instagram.
❏ #apkmod
> Descarga desde apk.
❏ #spotify *<nombre>*
> Descarga música de Spotify.
❏ #imagen <query>
> Has una búsqueda random de imágenes de Google.
❏ #musica *<búsqueda>*
> Descarga una música.
❏ #ytmp3
> Descarga música desde Mp3 YouTube.
❏ #ytmp3doc
> Descarga músicas desde Mp3 En documentos.
❏ #tiktok
> Descarga videos de tiktok.
❏ #ytsearch *<texto>*
> Busca y descarga un video de YouTube.


 ╭ֹ┈ ⵿❀⵿ ┈╮FUN
> Comandos para activar grupos.

❏ #acertijo
> Juega adivinando acertijos.
❏ #gay <@tag> | <nombre>
> Mira el porcentaje de que alguien es femboy.
❏ #lesbiana <@tag> | <nombre>
> Mira el porcentaje de que alguien sea lesbiana.
❏ #pajero <@tag> | <nombre>
> Mira el porcentaje de que alguien sea pajero.
❏ #pajera <@tag> | <nombre>
> Mira el porcentaje de de alguien sea Pajera.
❏ #puto <@tag> | <nombre>
> Di a todos quien es un puto.
❏ #puta <@tag> | <nombre>
> Di a todos quien es una puta.
❏ #manco <@tag> | <nombre>
> Di a todos que alguien es un manco.
❏ #manca <@tag> | <nombre>
> Di a todos quien es una manca.
❏ #rata <@tag> | <nombre>
> Di a todos que alguien es una rata.
❏ #prostituta <@tag> | <nombre>
> Has que alguien sea prostituta.
❏ #prostituto <@tag> | <nombre>
> Has que alguien sea prostituto.
❏ #apostar *<cantidad>*
> Apuesta recursos.
❏ #consejo
> El bot envía un consejo.
❏ #dance *<@user>*
> Has una danza.
❏ #doxear
> Doxea a alguien.
❏ #personalidad
> Mira la personalidad de alguien.
❏ #piropo
> Lanza un piropo a Alguien.
❏ #pokedex *<pokemon>*
> Mira la descripción de un pokemon.
❏ #pregunta
> Has una pregunta al bot.
❏ #reto
> Has un reto.
❏ #ruleta *<cantidad> <color>*
> Has una ruleta para ganar o perder contra un usuario a lo random.
❏ #ship
> Undefined
❏ #love
> Mira que porcentaje hay de que tu crosh  se enamoré de ti.
❏ #simi
> Habla con simisimi
❏ #bot
> Habla con el bot.
❏ #top *<texto>*
> Has un top 10 opcional.
❏ #amistad
> Pide ser amigo de alguien.
❏ #facto
> Has que el bot tire un facto.
❏ #meme
> Has que el bot envíe un meme.
❏ #pajeame
> Haste una paja good.
❏ #formartrio @usuario1 @usuario2
> Forma un trío con dos usuarios más.
❏ #verdad
> Di una verdad al grupo.


 ╭ֹ┈ ⵿❀⵿ ┈╮EMOX
> Comandos de Simulaciones. 

❏ #agarrarnalgas @tag
> Agarra las nalgas a una mamasita rika.
❏ #anal/culiar @tag
> Has un anál con alguien.
❏ #angry/enojado @tag
> Simulación de estar enojado.
❏ #bath/bañarse @tag
> Simulación de bañarse.
❏ #blowjob/mamada @tag
> Mamar el pitó a alguien.
❏ #blush/sonrojarse @tag
> Simulación de estar sonrojado.
❏ #chuparpata @tag
> Chupa la tetas a alguien.
❏ #cry/llorar @tag
> Simulación de que alguien esta llorando.
❏ #cuddle/acurrucarse @tag
> Acurrucate en alguien.
❏ #drunk/borracho @tag
> Simulación de estar borracho.
❏ #grabboobs/agarrartetas @tag
> Agarra las tetas a alguien.
❏ #hello/hola @tag
> Di hola al grupo. 
❏ #hug/abrazar @tag
> Abraza a alguien del grupo.
❏ #kill/matar @tag
> Mata a alguien del grupo. 
❏ #kiss/besar @tag
> Besar a alguien del grupo. 
❏ #kiss2/besar2 @tag
> Besar dos veces. 
❏ #love2/enamorada @tag
> Alguien esta enamorada.
❏ #patt/acariciar @tag
> Acaricia a alguien del grupo. 
❏ #penetrar @user
> Penetra a alguien en el grupo. 
❏ #punch/golpear @tag
> Golpea a alguien del grupo. 
❏ #sad/triste @tag
> Has que estas triste.
❏ #scared/asustada @tag
> Has que alguien esta asustada.
❏ #seduce/seducir @tag
> Seduce a alguien en el grupo. 
❏ #sexo/sex @tag
> Has sexo con alguien del grupo.
❏ #sleep/dormir @tag
> Hecha una siesta.
❏ #violar/perra @tag
> Viola a alguien del grupo. 
❏ #follar @tag
> Folla a alguien en el grupo. 


 ╭ֹ┈ ⵿❀⵿ ┈╮INFO
> Información en tiempo real del bot.

❏ #botreglas
> Mira como usar el bot de manera correcta.
❏ #ping
> Mira cuanto dura el bot para responder.
❏ #speed
> Mira la velocidad original del bot.
❏ #status
> Mira el estado actual del bot.
❏ #report
> Reporta algún error del bot.
❒ #sug
> Siguiere comandos para añadir al bot.
❏ #ds
> Elimina las sesiones para que el bot siga más rápido.

ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮RPG - ECONOMY
> Juegos RPG y economía para disfrutar con tus amigos.

❏ #daily
> Obtén una recompensa diaria.
❏ #levelup
> Sube de nivel en el bot.
❏ #minar
> Mina para obtener recursos.
❏ #comprarpersonaje <nombre>
> Conpra algun personaje.
❏ #repeat <texto>
> Has que el bot repita lo que sea.
❏ #rob2
> Roba Sus recursos a algún usuario.
❏ #rob
> Roba su EXP a algún usuario.
❏ #lb [página]
> Mira los usuarios con más recursos en el bot.
❏ #banco
> Mira cuanto tienes en el banco.
> Comandos de economía y diversión.
❏ #wallet
> Mira cuantas monedas tienes.
❏ #miexp
> Mira cuanto tienes de XP.
❏#bal
> Mira tus recursos.
❏#trabajar
> Trabaja para conseguir recursos en el bot.
❏#cajamisteriosa
> Mira una caja misteriosa. 
❏ #transferirmonedas *@user cantidad*
> Transfiere tus monedas.
❏ #claim
> Reclama la waifu obtenida.
❏ #rw
> opten una waifu.
❏ #rollwaifu
> Mira el roll de una waifu.
❏ #baltop
> Mira el top de usuarios con más Diamantes.
❏ #rentar2 *<link>*
> Renta tu Sub-Bot o Prem-Bot a algún grupo.


 ╭ֹ┈ ⵿❀⵿ ┈╮RG
> Comandos de registros.

❏ #profile
> Mira tu perfil.
❏ #unreg
> Elimina tu registro.


 ╭ֹ┈ ⵿❀⵿ ┈╮CONFIGURACIÓN
> Comandos para configurar el bot o grupos.

❒ #on <opción>
> Activa cualquier opción de tu grupo.
❒ #off <opción>
> Desactiva una opción en tu grupo.
❒ #group <open>
> Abre el grupo para que todos puedan escribir.
❒ #group <close>
> Cierra el grupo para que solo admins puedan escribir.`

    await conn.sendMessage(m.chat, {
      text: menu,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          title: devby,
          sourceUrl: 'https://Deymoon.club//',
          mediaType: 1,
          renderLargerThumbnail: true,
          thumbnailUrl: bannerFinal
        }
      }
    }, { quoted: m })

  } catch (e) {
    await m.reply(`✘ Ocurrió un error al mostrar el menú.\n\n${e}`)
  }
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'help', 'menú', 'asistenciabot', 'comandosbot', 'listadecomandos', 'menucompleto']
handler.register = true

export default handler