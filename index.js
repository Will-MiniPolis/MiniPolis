const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = '/';

var Info = new Discord.RichEmbed()
    .setAuthor(" MOD - [BR] ", "https://i.imgur.com/DjkjbxW.png")
    .setTitle(" ►    Informações sobre o BOT    ◄ ")
    .setColor(0xff1515)
    .setDescription(" \u200b ")
    .setFooter(" © MiniPólis - Todos os direitos reservados. ", "https://i.imgur.com/flUGdY9.png")
    .setURL("https://facebook.com/Will.MiniPolis")
    .addField(" • Desenvolvedor: Will Ajudante-MP ", " • Versão: 1.0.0 ")
    .addField(" • Atualização: 26/05/2018 ", " • Nome do BOT: MOD - [BR] ")
    .addField(" • Idioma: Português (Brasil) ", " • Proprietário: [MiniPólis](https://www.minipolis.com.br/) ");

var Jogar = new Discord.RichEmbed()
    .setAuthor(" MOD - [BR] ", "https://i.imgur.com/DjkjbxW.png")
    .setTitle(" :video_game:   Jogar MiniPólis   :video_game: ")
    .setColor(0x00ff40)
    .setDescription(" \u200b ")
    .setFooter(" © MiniPólis - Todos os direitos reservados. ", "https://i.imgur.com/flUGdY9.png")
    .setURL("https://minipolis.com.br")
    .addField("   Para jogar a versão ALPHA do MiniPólis acesse:   ", "     [alpha.minipolis.com.br](https://alpha.minipolis.com.br/)     ");

var Ajudantes = new Discord.RichEmbed()
    .setAuthor(" MOD - [BR] ", "https://i.imgur.com/DjkjbxW.png")
    .setTitle(" (+)   Ajudantes do MiniPólis   (+) ")
    .setColor(0xff1515)
    .setDescription(" \u200b ")
    .setFooter(" © MiniPólis - Todos os direitos reservados. ", "https://i.imgur.com/flUGdY9.png")
    .setThumbnail("https://i.imgur.com/JzrVRgv.png")
    .setURL("https://minipolis.com.br/")
    .addField(" • Ale Ajudante-MP ", " • Gelff Ajudante-MP ")
    .addField(" • Will Ajudante-MP ", " • William Ajudante-MP ");

var Equipe = new Discord.RichEmbed()
    .setAuthor(" MOD - [BR] ", "https://i.imgur.com/DjkjbxW.png")
    .setTitle(" (E)   Equipe do MiniPólis   (E) ")
    .setColor(0xff1515)
    .setDescription(" \u200b ")
    .setFooter(" © MiniPólis - Todos os direitos reservados. ", "https://i.imgur.com/flUGdY9.png")
    .setThumbnail("https://i.imgur.com/T1KZNJ6.png")
    .setURL("https://minipolis.com.br/")
    .addField(" • Andrew Equipe-MP ", " • Victor Equipe-MP ");

var Moderadores = new Discord.RichEmbed()
    .setAuthor(" MOD - [BR] ", "https://i.imgur.com/DjkjbxW.png")
    .setTitle(" (☆)   Moderadores do MiniPólis   (☆) ")
    .setColor(0xff1515)
    .setDescription(" \u200b ")
    .setFooter(" © MiniPólis - Todos os direitos reservados. ", "https://i.imgur.com/flUGdY9.png")
    .setThumbnail("https://i.imgur.com/DjkjbxW.png")
    .setURL("https://minipolis.com.br/")
    .addField(" • Nenhum integrante no momento. ", "\u200b");

var Administradores = new Discord.RichEmbed()
    .setAuthor(" MOD - [BR] ", "https://i.imgur.com/DjkjbxW.png")
    .setTitle(" (A)   Administradores do MiniPólis   (A) ")
    .setColor(0xff1515)
    .setDescription(" \u200b ")
    .setFooter(" © MiniPólis - Todos os direitos reservados .", "https://i.imgur.com/flUGdY9.png")
    .setThumbnail("https://i.imgur.com/XpxUHn4.png")
    .setURL("https://minipolis.com.br/")
    .addField(" • Rky Smart ", "• Tiago Admin-MP ");

bot.on("ready", async () => {
    console.log(`-----||-----||-----||----- \n BOT ATIVADO COM SUCESSO! \n -----||-----||-----||-----`);
    bot.user.setActivity(`Utilize: /comandos`);
});

bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let arg = cont.slice(1);
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === prefix + 'info') {
        message.channel.send(Info);
    }

    if (cmd === prefix + 'jogar') {
        message.channel.send(Jogar);
    }

    if (cmd === prefix + 'ajudantes') {
        message.channel.send(Ajudantes);
    }

    if (cmd === prefix + 'equipe') {
        message.channel.send(Equipe);
    }

    if (cmd === prefix + 'moderadores') {
        message.channel.send(Moderadores);
    }

    if (cmd === prefix + 'administradores') {
        message.channel.send(Administradores);
    }

    if (cmd === prefix + 'comandos') {
        message.channel.send("```diff\n- Este comando não está disponível no momento. \n```");
    }
    
    if (cmd === prefix + 'apagar') {
        async function purge() {
            message.delete();
            if (!message.member.roles.find("name", "Mito")) {
                message.channel.send('Você não tem o cargo \`Mito\` para utilizar este comando.');
                return;
            }
            if (isNaN(arg[0])) {
                message.channel.send('```diff\n- Por favor utilize números como argumento. \n-> ' + prefix + 'apagar <argumento> \n```');
                return;
            }
            const fetched = await message.channel.fetchMessages({limit: arg[0]});
            console.log(sender + ' apagou [' + fetched.size + '] mensagens!');
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`[ERRO]: ${error}`));
        }
        purge();
    }
    
    
    
    
    if (cmd === prefix + 'ping') {
    const m = await message.channel.send("Ping?");
    m.edit('Seu ping é ${m.createdTimestamp - message.createdTimestamp}ms.');
  }
    
    
    
    
});

bot.login(process.env.TOKEN);
