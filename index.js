const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`-----||-----||----- \nBOT ATIVADO COM SUCESSO! \n-----||-----||-----`);
  bot.user.setActivity(`!COMANDOS`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `!comandos`){
    message.channel.send("Este comando não está disponível no momento.");
  }
});

bot.login(process.env.token);
