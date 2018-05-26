const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});


var Ajudantes = new Discord.RichEmbed()
  .setAuthor("Moderador", "https://i.imgur.com/DjkjbxW.png")
  .setTitle("☆   Ajudantes do MiniPólis   ☆")
  .setColor(0xff1515)
  .setDescription("\u200b")
  .setFooter("© MiniPólis | 2018 - Todos os direitos reservados", "https://i.imgur.com/DjkjbxW.png")
  .setThumbnail("https://i.imgur.com/JzrVRgv.png")
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField(" • Ale Ajudante-MP ", " • Gelff Ajudante-MP ")
  .addField(" • Will Ajudante-MP ", " • William Ajudante-MP ");


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
    },
  } } )
}


if (cmd === `!jogar`){message.channel.send({embed: {
    color: 0x00ff40,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: ":video_game:   Jogar MiniPólis   :video_game:",
    url: "https://MiniPolis.com.br/",
    description: "\u200b",
    fields: [{
        name: "Para jogar a versão ALPHA do MiniPólis acesse:   ",
        value: "[ALPHA.MiniPolis.com.br](https://Alpha.MiniPolis.com.br/)"
    },
  ],
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© MiniPólis | 2018 - Todos os direitos reservados."
    },
  } } )
}
	
if (cmd === `!equipe`){	
  var embed = new Discord.RichEmbed()
    .setAuthor("Moderador", "https://i.imgur.com/DjkjbxW.png")
    .setTitle("☆   Ajudantes do MiniPólis   ☆")
    .setColor(0xff1515)
    .setDescription("\u200b")
    .setFooter("© MiniPólis | 2018 - Todos os direitos reservados", "https://i.imgur.com/DjkjbxW.png")
    .setThumbnail("https://i.imgur.com/JzrVRgv.png")
    .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
    .addField(" • Ale Ajudante-MP ", " • Gelff Ajudante-MP ")
    .addField(" • Will Ajudante-MP ", " • William Ajudante-MP ")
    message.channel.send(embed);
}
	
if (cmd === `!ajudantes`){
   message.channel.send(Ajudantes);
  }
	
	
if (cmd === `!equipe`){
   message.channel.send("```md\n# Equipe do MiniPólis: \n\n• Andrew Equipe-MP \n• Victor Equipe-MP \n```");
  }


if (cmd === `!moderadores`){
   message.channel.send("```md\n# Moderadores do MiniPólis: \n\n• Nenhum integrante no momento. \n```");
  }


if (cmd === `!administradores`){
   message.channel.send("```md\n# Administradores do MiniPólis: \n\n• Rky Smart \n• Tiago Admin-MP \n```");
  }


if (cmd === `!comandos`){
   message.channel.send("```diff\n- Este comando não está disponível no momento. \n```");
  }


});

bot.login(process.env.TOKEN);
