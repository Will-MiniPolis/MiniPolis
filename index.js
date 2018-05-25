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
    message.channel.send("```md\n# Comandos do BOT: \n\n• !jogar (Utilize este comando para jogar MiniPólis) \n• Comando 2 (Em breve) \n• Comando 3 (Em breve) \n```");
  }

  if (cmd === `!jogar`){
    message.channel.send("```md\n# Jogar MiniPólis: \n\nPara testar a versão ALPHA do MiniPólis basta acessar nosso site: \n• ALPHA.MiniPolis.com.br \n```");
  }

  if (cmd === `!info`){
    message.channel.send("```md\n# BOT - MiniPólis: \n\n• Desenvolvedor: Will Ajudante-MP \n• Versão: 1.0.0 \n• Atualização: 25/05/2018 \n• Nome do BOT: Moderador \n• Idioma: Português (Brasil) \n• Proprietário: MiniPolis.com.br \n```");
  }
});

bot.login(process.env.TOKEN);
