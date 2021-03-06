const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = '/';

bot.on("ready", async () => {
    console.log(`-----||-----||-----||----- \n  BOT ATIVADO COM SUCESSO! \n-----||-----||-----||-----`);
    bot.user.setActivity('Utilize: /comandos');
    bot.user.setStatus('dnd');
});

var Comandos = new Discord.RichEmbed()
    .setAuthor(" MOD - [BR] ", "https://i.imgur.com/DjkjbxW.png")
    .setTitle(" ►    Comandos do BOT    ◄ ")
    .setColor(0xff3e43)
    .setDescription(" \u200b ")
    .setFooter(" © MiniPólis - Todos os direitos reservados. ", "https://i.imgur.com/flUGdY9.png")
    .setURL("https://minipolis.com.br/")
    .addField(" •   /info (Informações sobre o BOT) ", " •   /suporte (Suporte do MiniPólis) ")
    .addField(" •   /jogar (Como jogar MiniPólis)) ", " •   /facebook (Página no Facebook do MiniPólis) ")
    .addField(" •   /ajudantes (Lista com os Ajudantes do MiniPólis) ", " •   /equipe (Lista com a Equipe do MiniPólis) ")
    .addField(" •   /moderadores (Lista com os Moderadores do MiniPólis) ", " •   /administradores (Lista com os Administradores do MiniPólis) ");

var MP = new Discord.RichEmbed()
    .setAuthor(" MOD - [BR] ", "https://i.imgur.com/DjkjbxW.png")
    .setTitle(" ►    Comandos da Equipe    ◄ ")
    .setColor(0xff3e43)
    .setDescription(" \u200b ")
    .setFooter(" © MiniPólis - Todos os direitos reservados. ", "https://i.imgur.com/flUGdY9.png")
    .setURL("https://minipolis.com.br/")
    .addField(" •   /apagar <argumento> (Apagar as mensagens do CHAT) ", " •   /falar (Comandar as falas do BOT) ");

var Info = new Discord.RichEmbed()
    .setAuthor(" MOD - [BR] ", "https://i.imgur.com/DjkjbxW.png")
    .setTitle(" ►    Informações sobre o BOT    ◄ ")
    .setColor(0xffff00)
    .setDescription(" \u200b ")
    .setFooter(" © MiniPólis - Todos os direitos reservados. ", "https://i.imgur.com/flUGdY9.png")
    .setURL("https://facebook.com/Will.MiniPolis/")
    .addField(" • Desenvolvedor: Will Ajudante-MP ", " • Versão: 1.0.0 ")
    .addField(" • Atualização: 29/05/2018 ", " • Nome do BOT: MOD - [BR] ")
    .addField(" • Idioma: Português (Brasil) ", " • Proprietário: [MiniPólis](https://www.minipolis.com.br/) ");

var Suporte = new Discord.RichEmbed()
    .setAuthor(" MOD - [BR] ", "https://i.imgur.com/DjkjbxW.png")
    .setTitle(" ►    Suporte do MiniPólis    ◄  ")
    .setColor(0x00ff40)
    .setDescription(" \u200b ")
    .setFooter(" © MiniPólis - Todos os direitos reservados. ", "https://i.imgur.com/flUGdY9.png")
    .setURL("https://minipolis.com.br/")
    .addField("   Para entrar em contato com o suporte, envie um email para:   ", " •   [suporte@minipolis.com.br](https://www.minipolis.com.br/)     ");

var Jogar = new Discord.RichEmbed()
    .setAuthor(" MOD - [BR] ", "https://i.imgur.com/DjkjbxW.png")
    .setTitle(" :video_game:   Jogar MiniPólis   :video_game: ")
    .setColor(0x00ff40)
    .setDescription(" \u200b ")
    .setFooter(" © MiniPólis - Todos os direitos reservados. ", "https://i.imgur.com/flUGdY9.png")
    .setURL("https://minipolis.com.br/")
    .addField("   Para jogar a versão ALPHA do MiniPólis acesse:   ", " •   [alpha.minipolis.com.br](https://alpha.minipolis.com.br/)     ");

var Facebook = new Discord.RichEmbed()
    .setAuthor(" MOD - [BR] ", "https://i.imgur.com/DjkjbxW.png")
    .setTitle(" ►    Página no Facebook do MiniPólis    ◄  ")
    .setColor(0x00ff40)
    .setDescription(" \u200b ")
    .setFooter(" © MiniPólis - Todos os direitos reservados. ", "https://i.imgur.com/flUGdY9.png")
    .setURL("https://minipolis.com.br/")
    .addField("   Curta nossa página no Facebook para acompanhar todas as novidades e notícias:   ", " •   [www.facebook.com/minipolisjogo](https://www.facebook.com/minipolisjogo/)     ");

var Ajudantes = new Discord.RichEmbed()
    .setAuthor(" MOD - [BR] ", "https://i.imgur.com/DjkjbxW.png")
    .setTitle(" (+)   Ajudantes do MiniPólis   (+) ")
    .setColor(0x00ffff)
    .setDescription(" \u200b ")
    .setFooter(" © MiniPólis - Todos os direitos reservados. ", "https://i.imgur.com/flUGdY9.png")
    .setThumbnail("https://i.imgur.com/JzrVRgv.png")
    .setURL("https://minipolis.com.br/")
    .addField(" • Ale Ajudante-MP ", " • Gelff Ajudante-MP ")
    .addField(" • Will Ajudante-MP ", " • William Ajudante-MP ");

var Equipe = new Discord.RichEmbed()
    .setAuthor(" MOD - [BR] ", "https://i.imgur.com/DjkjbxW.png")
    .setTitle(" (E)   Equipe do MiniPólis   (E) ")
    .setColor(0x00ffff)
    .setDescription(" \u200b ")
    .setFooter(" © MiniPólis - Todos os direitos reservados. ", "https://i.imgur.com/flUGdY9.png")
    .setThumbnail("https://i.imgur.com/T1KZNJ6.png")
    .setURL("https://minipolis.com.br/")
    .addField(" • Andrew Equipe-MP ", " • Victor Equipe-MP ");

var Moderadores = new Discord.RichEmbed()
    .setAuthor(" MOD - [BR] ", "https://i.imgur.com/DjkjbxW.png")
    .setTitle(" (☆)   Moderadores do MiniPólis   (☆) ")
    .setColor(0x00ffff)
    .setDescription(" \u200b ")
    .setFooter(" © MiniPólis - Todos os direitos reservados. ", "https://i.imgur.com/flUGdY9.png")
    .setThumbnail("https://i.imgur.com/DjkjbxW.png")
    .setURL("https://minipolis.com.br/")
    .addField(" • Nenhum integrante no momento. ", "\u200b");

var Administradores = new Discord.RichEmbed()
    .setAuthor(" MOD - [BR] ", "https://i.imgur.com/DjkjbxW.png")
    .setTitle(" (A)   Administradores do MiniPólis   (A) ")
    .setColor(0x00ffff)
    .setDescription(" \u200b ")
    .setFooter(" © MiniPólis - Todos os direitos reservados .", "https://i.imgur.com/flUGdY9.png")
    .setThumbnail("https://i.imgur.com/XpxUHn4.png")
    .setURL("https://minipolis.com.br/")
    .addField(" • Rky Smart ", "• Tiago Admin-MP ");
        
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
    let Palavras = ["lixo", "otário", "merda", "bosta", "fdp", "tmnc", "tnc", "troxa", "vsf", "viado", "gay", "puta", "rapariga", "vadia", "corno", "caralho", "buceta", "crl", "pau no cu", "pnc"];
    let Divulgar = ["minimania.net.br", "discord.gg", "discord.me", "minimaniajogo"];
    let Falar = args.join(" ");

    if (Palavras.some(word => message.content.includes(word))) {
        message.delete();
        message.channel.send(sender + ', \n```diff\n- Não é permitido a utilização de palavras insultantes. \n```');
    }

    if (Divulgar.some(word => message.content.includes(word))) {
        message.delete();
        message.channel.send(sender + ', \n```diff\n- Não é permitido a divulgação de terceiros. \n```');
    }

    if (cmd === prefix + 'comandos') {
        message.channel.send(Comandos);
    }

    if (cmd === prefix + 'mp') {
        message.channel.send(MP);
    }

    if (cmd === prefix + 'info') {
        message.channel.send(Info);
    }

    if (cmd === prefix + 'suporte') {
        message.channel.send(Suporte);
    }

    if (cmd === prefix + 'jogar') {
        message.channel.send(Jogar);
    }

    if (cmd === prefix + 'facebook') {
        message.channel.send(Facebook);
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

    if (cmd === prefix + 'apagar') {
        async function purge() {
            message.delete();
            if (!message.member.roles.find("name", "Mito")) {
                message.channel.send(sender + ', \n```diff\n- Você não tem permissão suficiente para utilizar este comando. \n```');
                return;
            }
            if (isNaN(arg[0])) {
                message.channel.send(sender + ', \n```diff\n- Por favor utilize números como argumento. \n-> ' + prefix + 'apagar <argumento> \n```');
                return;
            }
            const fetched = await message.channel.fetchMessages({
                limit: arg[0]
            });
            console.log(sender + ' apagou [' + fetched.size + '] mensagens!');
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`[ERRO]: ${error}`));
        }
        purge();
    }

    if (cmd === prefix + 'falar') {
        if (!message.member.roles.find("name", "Mito")) {
            message.channel.send(sender + ', \n```diff\n- Você não tem permissão suficiente para utilizar este comando. \n```');
            return;
        }
        message.delete().catch(O_o => {});
        message.channel.send(Falar);
    }
    
});

bot.login(process.env.TOKEN);
