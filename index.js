const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;
var prefix = (".");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'erisbot.com | .help', type: 0}})
    console.log("Bot pret");
});

    
    bot.on('message', message => {
        if (message.content === "ErisBot"){
            message.reply("Yes ?")
        }
  
        if (message.content === prefix+ "Mystik"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#B9121B')
                .addField("Liste des commandes :"," Voici les commandes du Bot !")
                .addField("!mention", "Cette commande permet de savoir son nom discord en se mentionnant.")
                .addField("!infos", "Cette commande permet de vous informer sur le serveur.")
                .addField("!staff", "Cette commande est utile si vous avez besoins de parler a un staff d'un certain grade , elle permet d'afficher la liste des staff de MystikRP ainsi que leur grade.")
            message.channel.sendEmbed(help_embed);
        }
    
        if (message.content === prefix+ "infos"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#AEEE00')
                .addField("Informations :","MystikRP est un serveur Rôleplay qui est composé d'un map personnalisé crée par Pelisma (Mappeur de MystikRP), MystikRP contient parfois ses propres addons !")
                .addField("Nom du serveur :", "[FR] MYSTIK ROLEPLAY | Map & Addons exclus | LoloxCommunity.com")
                .addField("IP :", "164.132.116.56:27260")
                .addField("Gamemode :", "DarkRP")
                .addField("Site Web :", "https://loloxcommunity.com/")
            message.channel.sendEmbed(help_embed);
        }
    
        if (message.content === prefix+ "staff"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#AEEE00')
                .addField("Staff du serveur :"," MystikRP")
                .addField("Fondateur", "Lolox")
                .addField("Mappeur", "Pelisma")
                .addField("Superadmins", "Shadow\n Kobralost\n Stylaxx")
                .addField("Administrateurs", "Skyflix\n Alex Backo\n El Famoso Marvino\n 🔱 𝓢𝓟𝓨 🔱\n ChickenNuggets (Hoie)\n A Fromage de chevre\n Petit enfant arrogant")
            message.channel.sendEmbed(help_embed);
        }       
        
        if (message.content === prefix+ "help"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#333333')
                .addField("Help menu !"," If you want more information regarding a specific command, use help command replacing command with the command you want :)")
                .addField("ErisBot is much more stable now after many days of testing. If you continue to find bugs, please let us know with the inviteme command", "")
                .addField("Fun Commands", "**.music** -  Blissful and clean music features straight to your ears!\n **.fml** - FML, if you think you're having a terrible day, read one of these!\n **.ud**\n - Search Urban Dictionary!")
                .addField("Utilities Commands", "**.stats** - Interested in the statistics of the bot? This is what you're looking for!\n **.help** - Confused on what commands I have? This'll list them for you!\n **.twitter** - Live twitter feeds straight to your channels!\n **.userinfo** - Get detailed information about a specific user!\n **.serverinfo** - Get detailed information about this server!\n **.ping** - Reply with a pong! Used to test response time!\n **.inviteme** - I'll join your Discord Server!")
                .addField("Customization Commands", "**.ignore** - Don't like Eris responding to something? Make him ignore it!")
            message.channel.sendEmbed(help_embed);
        }
    
    });

bot.login(token);
