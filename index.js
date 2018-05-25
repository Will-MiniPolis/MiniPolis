const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`-----||-----||-----||----- \n BOT ATIVADO COM SUCESSO! \n-----||-----||-----||-----`);
  bot.user.setActivity(`MiniPólis  -  !Comandos`);
});

bot.on("message", async message => {
	

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  

if (cmd === `!comandos`){
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Comandos do BOT: \n",
    fields: [{
        name: "!Info",
        value: "Informações sobre o BOT. \n"
      },
      {
        name: "!Jogar",
        value: "Utilize este comando para jogar MiniPólis. \n"
      },
      {
        name: "Markdown",
        value: "You can put all the *usual* **__Markdown__** inside of them."
      }
    ],
  }})
}


});

bot.login(process.env.TOKEN);
