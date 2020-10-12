const Discord = require("discord.js");
const embeds = require('../../utils/embed.js');

module.exports.run = async (bot, msg, args) => {
    var map = "";
    var ejects = "";
    var tasks = "";

    if(args.length < 6) {
        msg.channel.send({
            embed: embeds.errorEmbed('Not enough arguments! Try \'among help\'.')
        }).then(async msg => msg.delete({
            timeout: 5000
        }));
        return;
    }

    switch(args[1]) {
        case "NA":
        case "EU":
        case "ASIA":
            break;
        default:
            msg.channel.send({
                embed: embeds.errorEmbed('Please specify a region!')
            }).then(async msg => msg.delete({
                timeout: 5000
            }));
            return;
    }

    switch(args[2]) {
        case "TheSkeld": map = "The Skeld"; break;
        case "MiraHQ": map = "Mira HQ"; break;
        case "Polus": map = "Polus"; break;
        default:
            msg.channel.send({
                embed: embeds.errorEmbed('Please specify a map!')
            }).then(async msg => msg.delete({
                timeout: 5000
            }));
            return;
    }

    if(!(args[3] >= 1 && args[3] <= 3)) {
        msg.channel.send({
            embed: embeds.errorEmbed('Please specify an amount of impostors between 1-3!')
          }).then(async msg => msg.delete({
            timeout: 5000
          }));
        return;
    }
    
    switch(args[4]) {
        case "on": ejects = "On"; break;
        case "off": ejects = "Off"; break;
        default:
            msg.channel.send({
                embed: embeds.errorEmbed('Please specify if \'Confirm Ejects\' is enabled or disabled!')
            }).then(async msg => msg.delete({
                timeout: 5000
            }));
            return;
    }

    switch(args[5]) {
        case "on": tasks = "On"; break;
        case "off": tasks = "Off"; break;
        default:
            msg.channel.send({
                embed: embeds.errorEmbed('Please specify if \'Visual Tasks\' is enabled or disabled!')
            }).then(async msg => msg.delete({
                timeout: 5000
            }));
            return;
    }

    const lobbyEmbed = new Discord.MessageEmbed()
	.setColor('#FBD6C6')
	.setTitle('Among Us Lobby - hosted by "' + msg.author.username + '"')
	.setDescription('A list of all commands')
	.setThumbnail(bot.user.avatarURL)
	.addFields(
    { name: 'Code', value: '**' + args[0] + '**', inline: true},
    { name: 'Region', value: '**' + args[1] + '**', inline: true },
    { name: 'Map', value: map },
    { name: 'Impostors', value: args[3] },
    { name: 'Confirm Ejects', value: ejects, inline: true},
    { name: 'Visual Tasks', value: tasks, inline: true }
	)
	.setTimestamp()
	.setFooter('© amongbot 2020', bot.user.avatarURL);

  msg.channel.send(lobbyEmbed);
};

module.exports.help = {
  name: "lobby",
  arguments: "<code> <region: NA/EU/ASIA> <map: TheSkeld/MiraHQ/Polus> <impostors: 1/2/3> <confirmEjects: on/off> <visualTasks: on/off>",
  description: "",
  category: "regular"
}