const handler = async (m, {conn}) => {
  m.reply(global.ComprarBot);
};
handler.command ='comprarbot',/^(ComprarBot|Comprar|comprar|ComprarBot)$/i;
export default handler;

global.ComprarBot = `
〔 *Bot premium* 〕

Gratis
`;

    const buttons = [
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