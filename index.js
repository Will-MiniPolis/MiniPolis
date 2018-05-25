const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`-----||-----||-----||----- \n BOT ATIVADO COM SUCESSO! \n-----||-----||-----||-----`);
  bot.user.setActivity(`!COMANDOS - MiniPólis`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `!comandos`){
    message.channel.send("```css\n# Comandos do BOT: \n\n- !jogar (Utilize este comando para jogar MiniPólis) \n- Comando 2 \n- Comando 3 \n```");
  }

  if (cmd === `!jogar`){
    message.channel.send("```Para testar a versão ALPHA do MiniPólis basta acessar nosso site: \n--> https://ALPHA.MiniPolis.com.br <--```");
  }
});

bot.login(process.env.TOKEN);
