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
        
        if (message.content === prefix+ "help"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#333333')
                .addField("Help menu !"," If you want more information regarding a specific command, use help command replacing command with the command you want :)")
                .addField("ErisBot is much more stable now after many days of testing. If you continue to find bugs, please let us know with the inviteme command", "Commdands :")
                .addField("Fun Commands", "**.music** -  Blissful and clean music features straight to your ears!\n **.fml** - FML, if you think you're having a terrible day, read one of these!\n **.ud** - Search Urban Dictionary!")
                .addField("Utilities Commands", "**.stats** - Interested in the statistics of the bot? This is what you're looking for!\n **.help** - Confused on what commands I have? This'll list them for you!\n **.twitter** - Live twitter feeds straight to your channels!\n **.userinfo** - Get detailed information about a specific user!\n **.serverinfo** - Get detailed information about this server!\n **.ping** - Reply with a pong! Used to test response time!\n **.inviteme** - I'll join your Discord Server!")
                .addField("Customization Commands", "**.ignore** - Don't like Eris responding to something? Make him ignore it!")
                .addField("`Erisbot.com`", "https://www.erisbot.com/")
            message.channel.sendEmbed(help_embed);
        }
    
    });

bot.login(token);
