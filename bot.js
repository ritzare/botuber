var Discord = require('discord.js');
var bot = new Discord.Client();



bot.on('ready', () =>{
  console.log('dio');
})

bot.on('message', msg=>{
  if(msg.content === "JOTARO"){
      msg.reply("DIO!");
  }

})

bot.on('message', msg=>{
  if(msg.content ==="uber"){
      msg.reply("no diginity");
  }

})


bot.login(process.env.BOT_TOKEN);
