const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
شرفنا يا عسل:wink: :kissing_heart:
**
https://discord.gg/rEbSMu
                         
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
شرفنا يا عسل:wink: :kissing_heart:
**
https://discord.gg/rEbSMu
                         
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login('token');
