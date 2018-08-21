const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 

**سلام عليكم يا قلبي 
جبت لكم افضل سيرفر سوالف 
تنورنا يحلو
love you

                               [ https://discord.gg/Cn5RSea ]
 
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم يا قلبي 
جبت لكم افضل سيرفر سوالف 
تنورنا يحلو
love you

                               [https://discord.gg/Cn5RSea ]
  
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})





client.login(process.env.BOT_TOKEN);
