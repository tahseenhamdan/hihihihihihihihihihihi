const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 

**
سلام عليكم يا قلبي 
حياك بيننا و بياك :kissing_heart:
تنورنا يعسل

                               [ https://discord.gg/BRnFcMF ]
 
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم يا قلبي 
حياك بيننا و بياك :kissing_heart:
تنورنا يعسل


                               [https://discord.gg/BRnFcMF ]
  
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})





client.login(process.env.BOT_TOKEN);
