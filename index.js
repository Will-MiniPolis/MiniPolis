const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`-----||-----||-----||----- \n BOT ATIVADO COM SUCESSO! \n-----||-----||-----||-----`);
  bot.user.setActivity(`Utilize: !comandos`);
});

bot.on("message", async message => {
	

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  

if (cmd === `!info`){
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Informações sobre o BOT:",
    url: "https://www.facebook.com/Will.MiniPolis",
    fields: [{
        name: "Desenvolvedor:                                                                                                   Versão:",
        value: "Will Ajudante-MP                                                          1.0.0"
      },
      {
        name: "Atualização:                                                                                                                   Nome do BOT:",
        value: "25/05/2018                                                                       Moderador"
      },
      {
        name: "Idioma:                                                                                                                                      Proprietário:",
        value: "Português (Brasil)                                                           [www.MiniPolis.com.br](https://www.minipolis.com.br/)"
      },
    ],
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© MiniPólis | 2018 - Todos os direitos reservados."
    }
  }})
}


if (cmd === `!ajudantes`){
   message.channel.send("```md \n# Ajudantes do MiniPólis: \n• Ale Ajudante-MP \n• Gelff Ajudante-MP \n• Will Ajudante-MP \n• William Ajudante-MP \n```");
  }


if (cmd === `!equipe`){
   message.channel.send("```md \n# Equipe do MiniPólis: \n• Andre Equipe-MP \n• Victor Equipe-MP \n```");
  }


});

bot.login(process.env.TOKEN);
