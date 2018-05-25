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
    message.channel.send("```md\n# Comandos do BOT: \n\n• !jogar (Utilize este comando para jogar MiniPólis) \n• !info (Informações sobre o BOT) \n• Comando 3 (Em breve) \n```");
  }

  if (cmd === `!jogar`){
    message.channel.send(":video_game: Jogar MiniPólis :video_game: \n\nPara testar a versão ALPHA do MiniPólis basta acessar nosso site: \n:heart:    https://ALPHA.MiniPolis.com.br/   :heart:");
  }

  if (cmd === `!info`){
    message.channel.send("```md\n# BOT - MiniPólis: \n\n• Desenvolvedor: Will Ajudante-MP \n• Versão: 1.0.0 \n• Atualização: 25/05/2018 \n• Nome do BOT: Moderador \n• Idioma: Português (Brasil) \n• Proprietário: MiniPolis.com.br \n```");
  }
  

if (cmd === `!teste`){
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "This is an embed",
    url: "http://google.com",
    description: "This is a test embed to showcase what they look like and what they can do.",
    fields: [{
        name: "Fields",
        value: "They can have different fields with small headlines."
      },
      {
        name: "Masked links",
        value: "You can put [masked links](http://google.com) inside of rich embeds."
      },
      {
        name: "Markdown",
        value: "You can put all the *usual* **__Markdown__** inside of them."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Example"
  }}}
	)}
	  
});

bot.login(process.env.TOKEN);
