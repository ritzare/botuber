var Discord = require('discord.js');
var bot = new Discord.Client();



bot.on('ready', () =>{
  console.log('dio');
})

bot.on('message', msg=>{
  if(msg.content === "!jotaro"){
      msg.reply("DIO!");
      msg.reply("Oh? You’re approaching me? Instead of running away, you’re coming right to me? Even though your grandfather, Joseph, told you the secret of The World, like an exam student scrambling to finish the problems on an exam until the last moments before the chime? I can’t beat the shit out of you without getting closer. Oh ho! Then come as close as you like.");
  }
})

bot.on('message', msg=>{
  if(msg.content ==="!koichi"){
      msg.reply("no diginity");
  }
})

bot.on('message', msg=>{
  if(msg.content ==="!kira"){
      msg.reply("My name is Yoshikage Kira. I'm 33 years old. My house is in the northeast section of Morioh, where all the villas are, and I am not married. I work as an employee for the Kame Yu department stores, and I get home every day by 8 PM at the latest. I don't smoke, but I occasionally drink. I'm in bed by 11 PM, and make sure I get eight hours of sleep, no matter what. After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like a baby, I wake up without any fatigue or stress in the morning. I was told there were no issues at my last check-up. I'm trying to explain that I'm a person who wishes to live a very quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know that is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone.");
  }
})

bot.on('message', msg=>{
  if(msg.content ==="!goodbye"){
      msg.reply("GOOD BYE JOJO!");
  }
})

bot.on('message', msg=>{
  if(msg.content ==="!go"){
      msg.reply("Go ahead, Mr. Joestar!");
  }
})


bot.on('message', msg=>{
  if(msg.content ==="!ram ranch"){
      msg.reply("EIGHTEEN NAKED COWBOYS IN THE SHOWERS AT RAM RANCH BIG HARD THROBBING COCKS WANTING TO BE SUCKED EIGHTEEN NAKED COWBOYS WANTING TO BE FUCKED COWBOYS IN THE SHOWERS AT RAM RANCH ON THEIR KNEES WANTING TO SUCK COWBOY COCKS RAM RANCH REALLY ROCKS");
  }
})


bot.on('message', msg=>{
  var things = ['Brabo', 'Interessante', 'Complicado', 'Difícil', "Ó"];
  var thing = things[Math.floor(Math.random()*things.length)];
  if(msg.content ==="!uber"){
      msg.channel.send('' + thing);
  }

})

bot.on('message', msg=>{
  if(msg.content ==="!caio"){
      msg.channel.send("", {files: ["https://i.redd.it/hghybppwrfy21.jpg"]});
  }
})

bot.on('message', msg=>{
  if(msg.content ==="!kleber"){
      msg.reply("", {files: ["https://i.imgur.com/Pmze5fn.jpg"]});
  }
})

bot.on('message', msg=>{
  if(msg.content ==="!peixe"){
      msg.channel.send("", {files: ["https://i.imgur.com/gVrROcH.png"]});
  }
})

bot.on('message', msg=>{
  if(msg.content ==="!fap"){
      msg.channel.send("", {files: ["https://i.imgur.com/nMgTezY.gif"]});
  }
})

bot.on('message', msg=>{
  if(msg.content ==="!muda"){
      msg.channel.send("", {files: ["https://img.fireden.net/co/image/1546/47/1546477295870.gif"]});
  }
})

bot.on('message', msg=>{
  if(msg.content ==="!rods"){
      msg.channel.send("", {files: ["https://img.fireden.net/v/image/1506/78/1506786636491.png"]});
  }
})

bot.on('message', msg=>{
  if(msg.content ==="!retard"){
      msg.channel.send("", {files: ["https://images-cdn.9gag.com/photo/aV30bOn_460s.jpg"]});
  }
})

bot.login(process.env.BOT_TOKEN);
