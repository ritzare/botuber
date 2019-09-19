var Discord = require('discord.js');
var bot = new Discord.Client();


bot.on('ready', () =>{
  console.log('dio');
})

bot.on('message', msg=>{
  if(msg.content.toLowerCase() === "!jotaro" || msg.content.toLowerCase() === "-jotaro"){
      msg.reply("DIO!");
      msg.reply("Oh? You’re approaching me? Instead of running away, you’re coming right to me? Even though your grandfather, Joseph, told you the secret of The World, like an exam student scrambling to finish the problems on an exam until the last moments before the chime? I can’t beat the shit out of you without getting closer. Oh ho! Then come as close as you like.");
  }
})

bot.on('message', msg=>{
  if(msg.content.toLowerCase() ==="!koichi" || msg.content.toLowerCase() ==="-koichi"){
      msg.reply("no diginity");
  }
})

bot.on('message', msg=>{
  if(msg.content.toLowerCase() ==="!kira" || msg.content.toLowerCase() ==="-kira"){
      msg.reply("My name is Yoshikage Kira. I'm 33 years old. My house is in the northeast section of Morioh, where all the villas are, and I am not married. I work as an employee for the Kame Yu department stores, and I get home every day by 8 PM at the latest. I don't smoke, but I occasionally drink. I'm in bed by 11 PM, and make sure I get eight hours of sleep, no matter what. After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like a baby, I wake up without any fatigue or stress in the morning. I was told there were no issues at my last check-up. I'm trying to explain that I'm a person who wishes to live a very quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know that is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone.");
  }
})

bot.on('message', msg=>{
  if(msg.content.toLowerCase() ==="!goodbye" || msg.content.toLowerCase() ==="-goodbye"){
      msg.reply("GOOD BYE JOJO!");
  }
})

bot.on('message', msg=>{
  if(msg.content.toLowerCase() ==="!go" || msg.content.toLowerCase() ==="-go"){
      msg.reply("Go ahead, Mr. Joestar!");
  }
})

bot.on('message', msg=>{
  if(msg.content.toLowerCase() ==="!f" || msg.content.toLowerCase() ==="-f"){
      msg.channel.send("F");
  }
})

bot.on('message', msg=>{
  if(msg.content.toLowerCase() ==="!venice" || msg.content.toLowerCase() ==="-venice"){
      msg.channel.send("You know Paris, France? In English, it's pronounced 'Paris' but everyone else pronounces it without the 's' sound, like the French do. But with Venezia, everyone pronouces it the English way: 'Venice'. Like The Merchant of Venice or Death in Venice. WHY, THOUGH!? WHY ISN'T THE TITLE DEATH IN VENEZIA!? ARE YOU FUCKING KIDDING ME!? IT TAKES PLACE IN ITALY, SO USE THE ITALIAN WORD, DAMMIT! THAT SHIT PISSES ME OFF! BUNCH OF DUMBASSES!");
  }
})

bot.on('message', msg=>{
  var things = ['Brabo', 'Interessante', 'Complicado', 'Difícil', "Ó", "Tru Chori","Tá bem até"];
  var thing = things[Math.floor(Math.random()*things.length)];
  if(msg.content.toLowerCase() ==="!uber" || msg.content.toLowerCase() ==="-uber"){
      msg.channel.send('' + thing);
  }

})

bot.on('message', msg=>{
  var things = ["Traps aren't gay", "F E M I N I N E  P E N I S"];
  var thing = things[Math.floor(Math.random()*things.length)];
  if(msg.content.toLowerCase() ==="!futa" || msg.content.toLowerCase() ==="-futa"){
      msg.channel.send('' + thing);
  }

})


bot.on('message', msg=>{
  if(msg.content.toLowerCase() ==="!caio" || msg.content.toLowerCase() ==="-caio"){
    var things = ['https://i.redd.it/hghybppwrfy21.jpg', 'https://www.nossoamorexiste.com/blog/wp-content/uploads/2017/03/2oll1l9bwheff09pvm3j3sfrq.jpg'];
    var thing = things[Math.floor(Math.random()*things.length)];
      msg.channel.send("", {files: ["" + thing]});
  }
})

bot.on('message', msg=>{
  if(msg.content.toLowerCase() ==="!disgusting" || msg.content.toLowerCase() ==="-disgusting"){
      msg.channel.send("", {files: ["https://i.kym-cdn.com/photos/images/original/001/008/025/bfb.png"]});
  }
})

bot.on('message', msg=>{
  if(msg.content.toLowerCase() ==="!awesome" || msg.content.toLowerCase() ==="-awesome"){
      msg.channel.send("", {files: ["https://i.kym-cdn.com/entries/icons/original/000/029/711/cover6.jpg"]});
  }
})

bot.on('message', msg=>{
  if(msg.content.toLowerCase() ==="!culture" || msg.content.toLowerCase() ==="-culture"){
      msg.channel.send("", {files: ["https://i.kym-cdn.com/photos/images/original/001/236/841/075.jpg"]});
  }
})


bot.on('message', msg=>{
  if(msg.content.toLowerCase() ==="!kleber" || msg.content.toLowerCase() ==="-kleber"){
    var things = ["https://i.imgur.com/Pmze5fn.jpg", "https://i.imgur.com/nYQmZJ2.png"];
    var thing = things[Math.floor(Math.random()*things.length)];
      msg.channel.send("", {files: ["" + thing]});
  }
})

bot.on('message', msg=>{
  if(msg.content.toLowerCase() ==="!peixe" || msg.content.toLowerCase() ==="-peixe"){
      msg.channel.send("", {files: ["https://i.imgur.com/gVrROcH.png"]});
  }
})

bot.on('message', msg=>{
  if(msg.content.toLowerCase() ==="!fap" || msg.content.toLowerCase() ==="-fap"){
      msg.channel.send("", {files: ["https://i.imgur.com/nMgTezY.gif"]});
  }
})

bot.on('message', msg=>{
  if(msg.content.toLowerCase() ==="!ohgod" || msg.content.toLowerCase() ==="-ohgod"){
      msg.channel.send("", {files: ["https://i.imgur.com/X5dRSLh.gif"]});
  }
})

bot.on('message', msg=>{
  if(msg.content.toLowerCase() ==="!muda" || msg.content.toLowerCase() ==="-muda"){
      msg.channel.send("", {files: ["https://img.fireden.net/co/image/1546/47/1546477295870.gif"]});
  }
})

bot.on('message', msg=>{
  if(msg.content.toLowerCase() ==="!ora" || msg.content.toLowerCase() ==="-ora"){
      msg.channel.send("", {files: ["https://i.imgur.com/1wb4XCj.gif"]});
  }
})

bot.on('message', msg=>{
  if(msg.content.toLowerCase() ==="!wtf" || msg.content.toLowerCase() ==="-wtf"){
      msg.channel.send("", {files: ["https://i.redd.it/dv7afptdh9131.jpg"]});
  }
})

bot.on('message', msg=>{
  if(msg.content.toLowerCase() ==="!rods" || msg.content.toLowerCase() ==="-rods"){
      msg.channel.send("", {files: ["https://img.fireden.net/v/image/1506/78/1506786636491.png"]});
  }
})

bot.on('message', msg=>{
  if(msg.content.toLowerCase() ==="!sioux" || msg.content.toLowerCase() ==="-rods"){
      msg.channel.send("", {files: ["https://i.kym-cdn.com/photos/images/original/001/446/293/e73.jpg"]});
  }
})

bot.on('message', msg=>{
  if(msg.content.toLowerCase() ==="!ritzar" || msg.content.toLowerCase() ==="-ritzar"){
      msg.channel.send("", {files: ["https://i.imgur.com/5Avu8dO.png"]});
  }
})

bot.on('message', msg=>{
  if(msg.content.toLowerCase() ==="!lieuber" || msg.content.toLowerCase() ==="-lieuber"){
      msg.channel.send("", {files: ["https://i.imgur.com/bwdFFTO.png"]});
  }
})

bot.on('message', msg=>{
  if(msg.content.toLowerCase() ==="!retard" || msg.content.toLowerCase() ==="-retard"){
      msg.channel.send("", {files: ["https://images-cdn.9gag.com/photo/aV30bOn_460s.jpg"]});
  }
})

bot.on('message', msg=>{
  if(msg.content.toLowerCase() ==="!dororo" || msg.content.toLowerCase() ==="-dororo"){
      msg.channel.send("", {files: ["https://i.imgur.com/zCVBcUUl.jpg"]});
  }
})

/////musicbot



bot.login(process.env.BOT_TOKEN);
