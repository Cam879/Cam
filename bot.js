const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('This bot is online!');
    bot.user.setActivity('minecraft', { type: 'STREAMING'}).catch(console.error);
});

client.on('message', message => {
    if (message.content === 'hi') {
    	message.reply('hey!');
  	}
    
    });
    
client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
