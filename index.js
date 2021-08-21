require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_PRESENCES"] }); //create new client
const channelId = '878509130824949761';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
  if (msg.channel.id !== '878509130824949761' && (msg.content.includes("tangina") || msg.content.includes("fuck") || msg.content.includes("fucking") || msg.content.includes("taena") || msg.content.includes("gago") 
	  || msg.content.includes("bobo"))) {
    msg.reply('HEY, LANGUAGE!');
  }
  
  if (msg.channel.id !== '878509130824949761' && (msg.content.includes("nigger") || msg.content.includes("nigga") || msg.content.includes("nigguh") || msg.content.includes("niggah") || msg.content.includes("rape")
	  || msg.content.includes("bitch"))) {
	const suspect = 'ATTENTION <@&878457613912768552> <@&878457039645450321> ! <@' + msg.author.id + '> just said: "' + msg.content + '". GUILTY OR NOT GUILTY?';
    msg.reply('YOU HAVE MENTIONED A WORD THAT MAY OR MAY NOT BE CONSIDERED RACIST AND/OR SEXUALLY OFFENSIVE/SENSITIVE. WE HAVE RECORDED YOUR STATEMENT AND THE PROPER ADMINS HAVE NOW BEEN NOTIFIED. WE WILL NOW PASS JUDGEMENT ONTO YOU.');
	const channel = client.channels.cache.get(channelId);
	channel.send(suspect);
  }
});

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token