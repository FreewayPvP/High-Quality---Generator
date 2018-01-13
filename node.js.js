const Commando = require('discord.js-commando');
const Discord = require('discord.js');

const client = new Commando.Client({
	owner: '367910644181368833'
});

const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    client.user.setGame(`!help - ${client.users.size} Users!`);
    client.user.setStatus('idle');
    client.user.setGame(`!help - ${client.users.size} Users!`, 'https://www.twitch.tv/thomaspvp5');
});

const path = require('path');

client.registry
  .registerGroups([
		['cool', 'Cool commands'],
		['fancy', 'fancy Commands'],
		['games', 'Game Commands'],
		['alts', 'alt Commands'],
		['fun', 'Fun Commands']
    ])
    
    .registerDefaultGroups()
    .registerDefaultTypes()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'fun stuff'))

client.login('Mzk4NjM5MzA2MzA4MTkwMjE5.DTv5UA.NlahSBzti24sQlX7HuCU7tRxOQY');
