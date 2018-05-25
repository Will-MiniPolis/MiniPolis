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
        name: ":black_circle:  !Info  :black_circle:",
        value: "Obtenha informações sobre o BOT."
      },
      {
        name: ":white_circle:  !Jogar  :white_circle:",
        value: "Utilize este comando para saber como jogar MiniPólis."
      },
      {
        name: ":red_circle:  EM BREVE   :red_circle:",
        value: "Este comando não está disponível no momento."
      },
      {
        name: ":large_blue_circle:  EM BREVE   :large_blue_circle:",
        value: "Este comando não está disponível no momento."
      },
    ],
  }})
}


});

bot.login(process.env.TOKEN);
