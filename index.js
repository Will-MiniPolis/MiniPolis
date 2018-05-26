const Discord = require("discord.js");
const bot = new Discord.Client({
    disableEveryone: true
});

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

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `/info`) {
        message.channel.send(Info);
    }

    if (cmd === `/jogar`) {
        message.channel.send(Jogar);
    }

    if (cmd === `/ajudantes`) {
        message.channel.send(Ajudantes);
    }

    if (cmd === `/equipe`) {
        message.channel.send(Equipe);
    }

    if (cmd === `/moderadores`) {
        message.channel.send(Moderadores);
    }

    if (cmd === `/administradores`) {
        message.channel.send(Administradores);
    }

    if (cmd === `/comandos`) {
        message.channel.send("```diff\n- Este comando não está disponível no momento. \n```");
    }
    
    
    
    
    let msg = message.content.toUpperCase();
    
    if (msg.startsWith('/apagar')) { 
        async function apagar() {
            message.delete();
            if (!message.member.roles.find("name", "bot-commander")) {
                message.channel.send('You need the \`bot-commander\` role to use this command.');
                return;
            }
            if (isNaN(args2[0])) {
                message.channel.send('```diff\n - Por favor utilize número como um argumento. \n -> /apagar <argumento> \n```');
                return;
            }
            const fetched = await message.channel.fetchMessages({limit: args2[0]});
            console.log(fetched.size + ' messages found, deleting...');
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`));
        }
        apagar();
    }
    
    
    
    
});

bot.login(process.env.TOKEN);
