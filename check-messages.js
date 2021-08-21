const Discord = require('discord.js'); //import discord.js

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_PRESENCES"] }); //create new client
const channelId = '878509130824949761';

client.on('messageCreate', msg => {
  if (msg.content.includes("tangina") || msg.content.includes("fuck") || msg.content.includes("fucking") || msg.content.includes("taena") || msg.content.includes("gago") || msg.content.includes("bobo")) {
    msg.reply('HEY, LANGUAGE!');
  }
  else if (msg.content.includes("nigger") || msg.content.includes("nigga") || msg.content.includes("nigguh") || msg.content.includes("niggah")) {
	const suspect = '<@' + msg.author.id + '> just said: ' + msg.content;
    msg.reply('WELL, SOMEONE IS BEING A BAD MEMBER! THE ADMINISTRATORS HAVE BEEN NOTIFIED AND WILL DISCUSS YOUR PUNISHMENT. CIAO!');
	const channel = client.channels.cache.get(channelId);//client.channels.cache.get(channelId);
	//console.log(channel);
	channel.send(suspect);
	//console.log(msg.author.id);
  }
});