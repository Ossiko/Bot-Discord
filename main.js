const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === 'ping') msg.channel.send("Pong !");
});

client.login('Njk0NjU0NTQ2MzY2MDM4MDY3.XoOz0A.fsb-b14eBBHc_tjqwEa3ZqACoIc');
