const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

bot.on('guildMemberAdd, member => {
       
       const channel = member.guild.channels.find(channel => channel.name === "👋┇welcome-and-leave");
       if(!channel) return;
 
       channel.send(`Welcome to your server, ${member}, please read the rules in the rules channel!`)

client.on('message', message => {
    if (message.content === 'HELLO') {
    	message.reply('HELLO FRIEND');
  	}
    
 });

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
