const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});


var Ajudantes = new Discord.RichEmbed()
  .setAuthor("MOD - [BR]", "https://i.imgur.com/DjkjbxW.png")
  .setTitle("(+)   Ajudantes do MiniPólis   (+)")
  .setColor(0xff1515)
  .setDescription("\u200b")
  .setFooter("© MiniPólis - Todos os direitos reservados", "https://i.imgur.com/DjkjbxW.png")
  .setThumbnail("https://i.imgur.com/JzrVRgv.png")
  .setURL("https://minipolis.com.br/")
  .addField(" • Ale Ajudante-MP ", " • Gelff Ajudante-MP ")
  .addField(" • Will Ajudante-MP ", " • William Ajudante-MP ");

var Moderadores = new Discord.RichEmbed()
  .setAuthor("MOD - [BR]", "https://i.imgur.com/DjkjbxW.png")
  .setTitle("(☆)   Moderadores do MiniPólis   (☆)")
  .setColor(0xff1515)
  .setDescription("\u200b")
  .setFooter("© MiniPólis - Todos os direitos reservados", "https://i.imgur.com/DjkjbxW.png")
  .setThumbnail("https://i.imgur.com/DjkjbxW.png")
  .setURL("https://minipolis.com.br/")
  .addField(" • Nenhum integrante no momento. ", "\u200b")


bot.on("ready", async () => {
  console.log(`-----||-----||-----||----- \n BOT ATIVADO COM SUCESSO! \n-----||-----||-----||-----`);
  bot.user.setActivity(`Utilize: /comandos`);
});

bot.on("message", async message => {	

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  

if (cmd === `/info`){
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
        value: "Português (Brasil)                                                           [www.minipolis.com.br](https://www.minipolis.com.br/)"
      },
    ],
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© MiniPólis | 2018 - Todos os direitos reservados."
    },
  } } )
}


if (cmd === `/jogar`){message.channel.send({embed: {
    color: 0x00ff40,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: ":video_game:   Jogar MiniPólis   :video_game:",
    url: "https://minipolis.com.br/",
    description: "\u200b",
    fields: [{
        name: "Para jogar a versão ALPHA do MiniPólis acesse:   ",
        value: "[alpha.minipolis.com.br](https://alpha.minipolis.com.br/)"
    },
  ],
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© MiniPólis | 2018 - Todos os direitos reservados."
    },
  } } )
}
	
if (cmd === `/ajudantes`){
   message.channel.send(Ajudantes);
  }


if (cmd === `/equipe`){
   message.channel.send(Equipe);
  }


if (cmd === `/moderadores`){
   message.channel.send(Moderadores);
  }


if (cmd === `/administradores`){
   message.channel.send("```md\n# Administradores do MiniPólis: \n\n• Rky Smart \n• Tiago Admin-MP \n```");
  }


if (cmd === `/comandos`){
   message.channel.send("```diff\n- Este comando não está disponível no momento. \n```");
  }


});

bot.login(process.env.TOKEN);
