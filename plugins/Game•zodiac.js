// plugins/carrera-gp.js
import { createHash } from 'crypto';

// Almacenamiento de carreras
global.carrerasActivas = global.carrerasActivas || new Map();

// Manejador de botones integrado
global.manejarCarreraGP = global.manejarCarreraGP || async (m, conn) => {
    if (!m.message?.templateButtonReplyMessage?.selectedId?.startsWith('carrera_')) return;
    
    try {
        const [accion, idCarrera] = m.message.templateButtonReplyMessage.selectedId.replace('carrera_', '').split('_');
        const carrera = global.carrerasActivas.get(idCarrera);
        
        if (!carrera || carrera.chat !== m.chat) {
            return conn.reply(m.chat, '❌ *Esta carrera ya ha terminado*', m);
        }

        if (accion === 'unirse') {
            await unirseACarrera(m, conn, carrera, idCarrera);
        } else if (accion === 'iniciar' && m.sender === carrera.creador) {
            await iniciarCarreraManual(idCarrera, conn);
        }
    } catch (error) {
        console.error('Error en manejo de carrera:', error);
    }
};

let handler = async (m, { conn, usedPrefix, args, isAdmin }) => {
    if (!m.isGroup) return conn.reply(m.chat, '🎯 *Este comando solo funciona en grupos*', m);
    if (!isAdmin) return conn.reply(m.chat, '❌ *Solo admins pueden iniciar carreras*', m);

    const [apuesta = '100'] = args;
    const apuestaNum = parseInt(apuesta);
    
    if (isNaN(apuestaNum) || apuestaNum < 10) {
        return conn.reply(m.chat, `💎 *Uso:* ${usedPrefix}carrera-gp [apuesta]\n*Ejemplo:* ${usedPrefix}carrera-gp 500`, m);
    }

    const idCarrera = createHash('md5').update(`${m.chat}-${Date.now()}`).digest('hex').substring(0, 6);
    const pista = generarPista();

    const carrera = {
        id: idCarrera,
        chat: m.chat,
        apuesta: apuestaNum,
        pista: pista,
        estado: 'esperando',
        participantes: new Map(),
        creador: m.sender,
        mensajeId: null,
        creacion: Date.now(),
        timeout: null
    };

    global.carrerasActivas.set(idCarrera, carrera);

    await enviarMensajeCarrera(carrera, conn);
    
    // Auto-inicio en 60 segundos
    carrera.timeout = setTimeout(() => autoIniciarCarrera(idCarrera, conn), 60000);

    conn.reply(m.chat, `🏎️ *Carrera ${idCarrera} creada!* Tienes 60 segundos para que se unan participantes.`, m);
};

async function enviarMensajeCarrera(carrera, conn) {
    const tiempoRestante = Math.max(0, 60 - Math.floor((Date.now() - carrera.creacion)/1000));
    
    const mensaje = {
        text: `🏁 *CARRERA GP - APUESTA: ${carrera.apuesta} XP* 🏁\n\n` +
              `🎯 *Pista:* ${carrera.pista.emoji} ${carrera.pista.nombre}\n` +
              `📏 *Longitud:* ${carrera.pista.longitud}m | ⚡ ${carrera.pista.dificultad}/5\n\n` +
              `👥 *Participantes:* ${carrera.participantes.size}/8\n` +
              `⏰ *Auto-inicio en:* ${tiempoRestante}s\n\n` +
              `🚗 _Presiona "UNIRME" para participar_`,
        footer: `Creado por: @${carrera.creador.split('@')[0]}`,
        templateButtons: [
            {
                index: 1,
                quickReplyButton: {
                    displayText: '🚗 UNIRME A LA CARRERA',
                    id: `carrera_unirse_${carrera.id}`
                }
            },
            {
                index: 2,
                quickReplyButton: {
                    displayText: '🎯 INICIAR AHORA',
                    id: `carrera_iniciar_${carrera.id}`
                }
            }
        ],
        mentions: [carrera.creador]
    };

    if (carrera.mensajeId) {
        try {
            await conn.sendMessage(carrera.chat, {
                delete: { remoteJid: carrera.chat, fromMe: true, id: carrera.mensajeId }
            });
        } catch (e) {}
    }
    
    const msg = await conn.sendMessage(carrera.chat, mensaje);
    carrera.mensajeId = msg.key.id;
}

async function unirseACarrera(m, conn, carrera, idCarrera) {
    if (carrera.estado !== 'esperando') {
        return conn.reply(m.chat, '❌ *La carrera ya está en curso*', m);
    }

    if (carrera.participantes.has(m.sender)) {
        return conn.reply(m.chat, '🚗 *Ya estás en esta carrera!*', m);
    }

    if (carrera.participantes.size >= 8) {
        return conn.reply(m.chat, '❌ *Carrera llena! Máximo 8 participantes*', m);
    }

    // Asignar vehículo aleatorio
    const vehiculos = ['🚗', '🏎️', '🚓', '🚀', '🛵', '🚁', '🚜', '🛻'];
    const vehiculo = vehiculos[carrera.participantes.size % vehiculos.length];

    carrera.participantes.set(m.sender, {
        nombre: m.pushName || m.sender.split('@')[0],
        vehiculo: vehiculo,
        joinTime: Date.now(),
        velocidad: Math.random() * 2 + 1
    });

    await enviarMensajeCarrera(carrera, conn);
    await conn.reply(m.chat, 
        `✅ *Te uniste a la carrera!* ${vehiculo}\n` +
        `Posición: ${carrera.participantes.size}/8\n` +
        `Pista: ${carrera.pista.emoji} ${carrera.pista.nombre}`,
        m
    );
}

async function autoIniciarCarrera(idCarrera, conn) {
    const carrera = global.carrerasActivas.get(idCarrera);
    if (!carrera || carrera.estado !== 'esperando') return;

    if (carrera.participantes.size < 2) {
        await conn.sendMessage(carrera.chat, {
            text: '❌ *Carrera cancelada:* No hay suficientes participantes (mínimo 2)'
        });
        return global.carrerasActivas.delete(idCarrera);
    }

    await iniciarCarrera(idCarrera, conn);
}

async function iniciarCarreraManual(idCarrera, conn) {
    const carrera = global.carrerasActivas.get(idCarrera);
    if (!carrera || carrera.estado !== 'esperando') return;

    if (carrera.participantes.size < 2) {
        return conn.reply(carrera.chat, '❌ *Necesitas al menos 2 participantes*', null);
    }

    if (carrera.timeout) clearTimeout(carrera.timeout);
    await iniciarCarrera(idCarrera, conn);
}

async function iniciarCarrera(idCarrera, conn) {
    const carrera = global.carrerasActivas.get(idCarrera);
    if (!carrera) return;

    carrera.estado = 'iniciando';
    
    // Cuenta regresiva emocionante
    const countdown = [
        { text: '🎯 *¡PREPARADOS!*', delay: 1000 },
        { text: '🎯 *¡LISTOS!*', delay: 1000 },
        { text: '🎯 *¡YA!*', delay: 800 },
        { text: '🏁 *¡GOOO!* 🏁', delay: 500 }
    ];

    for (const step of countdown) {
        await conn.sendMessage(carrera.chat, { text: step.text });
        await new Promise(resolve => setTimeout(resolve, step.delay));
    }

    carrera.estado = 'en-curso';
    await simularCarrera(carrera, conn);
}

async function simularCarrera(carrera, conn) {
    const participantes = Array.from(carrera.participantes.entries());
    const resultados = new Map();
    let mensajeId = null;

    // Simular 5 segundos de carrera con updates
    for (let segundos = 0; segundos < 5; segundos++) {
        if (carrera.estado !== 'en-curso') break;

        // Calcular progreso
        participantes.forEach(([sender, data], index) => {
            const progreso = Math.min(100, (segundos * 20) + (data.velocidad * (Math.random() * 5 + 5)));
            resultados.set(sender, { ...data, progreso, posicion: index + 1 });
        });

        // Ordenar por progreso
        const ranking = Array.from(resultados.entries())
            .sort(([, a], [, b]) => b.progreso - a.progreso);

        // Crear visualización
        let pistaVisual = `🏁${'─'.repeat(25)}🎯\n`;
        ranking.slice(0, 5).forEach(([sender, data], index) => {
            const barraPos = Math.floor((data.progreso / 100) * 25);
            pistaVisual += `${data.vehiculo} ${' '.repeat(barraPos)}${index < 3 ? ['🥇', '🥈', '🥉'][index] : '🔸'} @${sender.split('@')[0]}\n`;
        });

        const mensaje = {
            text: `🏎️ *CARRERA EN CURSO* 🏎️\n\n` +
                  `🎯 ${carrera.pista.emoji} *${carrera.pista.nombre}*\n` +
                  `📏 ${carrera.pista.longitud}m | ⚡ ${carrera.pista.dificultad}/5\n\n` +
                  `${pistaVisual}\n` +
                  `⏱️ *Tiempo:* ${segundos + 1}s`,
            mentions: ranking.map(([sender]) => sender)
        };

        if (mensajeId) {
            try {
                await conn.sendMessage(carrera.chat, {
                    delete: { remoteJid: carrera.chat, fromMe: true, id: mensajeId }
                });
            } catch (e) {}
        }
        
        const newMsg = await conn.sendMessage(carrera.chat, mensaje);
        mensajeId = newMsg.key.id;
        
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    await finalizarCarrera(carrera, conn, resultados);
}

async function finalizarCarrera(carrera, conn, resultados) {
    carrera.estado = 'finalizado';
    
    const rankingFinal = Array.from(resultados.entries())
        .sort(([, a], [, b]) => b.progreso - a.progreso)
        .slice(0, 3);

    let resultadosMsg = `🏆 *RESULTADOS FINALES* 🏆\n\n`;
    resultadosMsg += `🎯 *Pista:* ${carrera.pista.emoji} ${carrera.pista.nombre}\n`;
    resultadosMsg += `💰 *Apuesta:* ${carrera.apuesta} XP\n\n`;

    rankingFinal.forEach(([sender, data], index) => {
        const premio = carrera.apuesta * (3 - index);
        resultadosMsg += `${['🥇', '🥈', '🥉'][index]} ${data.vehiculo} @${sender.split('@')[0]} - +${premio} XP\n`;
    });

    resultadosMsg += `\n🎉 *¡Felicidades a los ganadores!*`;

    await conn.sendMessage(carrera.chat, {
        text: resultadosMsg,
        mentions: rankingFinal.map(([sender]) => sender)
    });

    global.carrerasActivas.delete(carrera.id);
}

function generarPista() {
    const pistas = [
        { emoji: '🏔️', nombre: 'Montaña Nebulosa', longitud: 3500, dificultad: 4 },
        { emoji: '🌋', nombre: 'Volcán Ardiente', longitud: 2800, dificultad: 5 },
        { emoji: '🌊', nombre: 'Costa Veloz', longitud: 4200, dificultad: 3 },
        { emoji: '🏙️', nombre: 'Ciudad Futurista', longitud: 3800, dificultad: 4 },
        { emoji: '🌵', nombre: 'Desierto Extremo', longitud: 5000, dificultad: 2 },
        { emoji: '❄️', nombre: 'Pista Helada', longitud: 3200, dificultad: 4 }
    ];
    return pistas[Math.floor(Math.random() * pistas.length)];
}

// Auto-registro del manejador de botones
if (!global.__carreraGPRegistered) {
    global.__carreraGPRegistered = true;
    
    // Escuchar mensajes automáticamente
    if (global.conn) {
        global.conn.ev.on('messages.upsert', async ({ messages }) => {
            const m = messages[0];
            if (m.message?.templateButtonReplyMessage) {
                await global.manejarCarreraGP(m, global.conn);
            }
        });
    }
}

handler.help = ['carrera-gp [apuesta]'];
handler.tags = ['game', 'group', 'fun'];
handler.command = ['carrera-gp', 'carreragp', 'race', 'carrera'];
handler.group = true;
handler.admin = true;
handler.register = true;

export default handler;