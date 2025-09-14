let handler = async (m, { conn, usedPrefix }) => {
  const memes = [                   
    'https://qu.ax/vDgQd.mp4',
    'https://qu.ax/jpiBe.mp4',
    'https://qu.ax/TiecS.mp4',
    'https://qu.ax/LWJCF.mp4',
    'https://qu.ax/euTXj.mp4',
    'https://qu.ax/GoOJh.mp4',
  ];
  const randomMeme = memes[Math.floor(Math.random() * memes.length)];
  const buttons = [
    { 
      buttonId: `#code`, 
      buttonText: { 
        displayText: "✿ Ser Sub-Bot ✿" 
      }, 
      type: 1 
    },
    { 
      buttonId: `#menu`, 
      buttonText: { 
        displayText: "✿ Lista de comandos ✿" 
      }, 
      type: 1 
    },
    { 
      buttonId: `#sockets`, 
      buttonText: { 
        displayText: "✿ Bots activos ✿" 
      }, 
      type: 1 
    },
    { 
      buttonId: `#memev`,
      buttonText: {
        displayText: "✿ Ver más ✿"
      },
      type: 1
    }
  ];
  await conn.sendMessage(
    m.chat, 
    { 
      video: { 
        url: randomMeme 
      }, 
      caption: "¡Aquí tienes un meme para disfrutar!", 
      buttons: buttons, 
      viewOnce: true 
    }, 
    { 
      quoted: m 
    } 
  );
};

handler.help = ['memev'];
handler.tags = ['fun'];
handler.command = ['memev'];

export default handler;