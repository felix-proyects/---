import { promises as fs } from 'fs';

const charactersFile = './src/database/characters.json';
const waifusEnVentaFile = './src/database/waifusVenta.json';

async function loadCharacters() {
    const data = await fs.readFile(charactersFile, 'utf-8');
    return JSON.parse(data);
}
async function saveCharacters(characters) {
    await fs.writeFile(charactersFile, JSON.stringify(characters, null, 2));
}
async function loadVentas() {
    try {
        const data = await fs.readFile(waifusEnVentaFile, 'utf-8');
        return JSON.parse(data);
    } catch {
        return [];
    }
}
async function saveVentas(ventas) {
    await fs.writeFile(waifusEnVentaFile, JSON.stringify(ventas, null, 2));
}

let handler = async (m, { args, conn }) => {
    const userId = m.sender;
    const texto = args.join(' ').trim();

    let personaje = null;
    let precio = null;

    if (m.quoted?.text) {

        const idMatch = m.quoted.text.match(/ID:\s*\*([^\*]+)\*/i);
        if (!idMatch) return m.reply('✧ No se pudo encontrar el ID del personaje citado.');
        const id = idMatch[1].trim();
        const characters = await loadCharacters();
        personaje = characters.find(c => c.id === id);
        precio = parseInt(args[0]);
    } else {
        const precioDetectado = args.find(a => !isNaN(a));
        if (!precioDetectado) {
            return m.reply('✿ El precio debe ser válido.\n> Ejemplo: *${comando} Miku Nakano 40000*');
        }

        precio = parseInt(precioDetectado);
        if (isNaN(precio) || precio < 1) {
            return m.reply('✿ El precio debe ser un número mayor que 0.');
        }


        const nombre = args.filter(a => a !== precioDetectado).join(' ').toLowerCase();
        const characters = await loadCharacters();
        personaje = characters.find(c => c.name.toLowerCase() === nombre);

        if (!personaje) return m.reply(`✿ El Personaje *"${nombre}"* no fue encontrado.`);
    }

    if (personaje.user !== userId) return m.reply('✿ Este personaje no te pertenece.');

    const ventas = await loadVentas();

    personaje.enVenta = true;
    personaje.precioVenta = precio;

    ventas.push({
        id: personaje.id,
        name: personaje.name,
        precio: precio,
        vendedor: userId,
        fecha: Date.now()
    });

    await saveCharacters(await loadCharacters());
    await saveVentas(ventas);

    m.reply(`✿ Has puesto en venta a *${personaje.name}* por *¥${precio.toLocaleString()} ${moneda}*.`);
};

handler.help = ['venderwaifu'];
handler.tags = ['waifus'];
handler.command = ['vender', 'sell'];
handler.group = true;
handler.register = true;

export default handler;