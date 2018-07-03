const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});


const fs = require('fs');
client.on("guildMemberAdd", member => {
      
      const welcomer = member.guild.channels.find("name","welcome"); //اسم روم
                
      var Canvas = require('canvas')
      var jimp = require('jimp')
      
const mi = ['./img/w1.png','./img/w2.png','/img/w3.png','/img/w4.png']; //يمكن ضيف '/img/w3.png','/img/w4.png'...
      
     
      
              let Image = Canvas.Image,
                  canvas = new Canvas(401, 202),
                  ctx = canvas.getContext('2d');
              ctx.patternQuality = 'bilinear';
              ctx.filter = 'bilinear';
              ctx.antialias = 'subpixel';
              ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
              ctx.shadowOffsetY = 2;
              ctx.shadowBlur = 2;
              fs.readFile(`${mi[Math.floor(Math.random() * mi.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 401, 202);
      
      })
      
                     let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
      
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.drawImage(ava, 152, 27, 95, 95);
                            //member number..
                        ctx.font = '13px Arial';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(`انت العضو رقم  ${member.guild.memberCount} ! `, 340 , 98);
    
                                                      //name
                              ctx.font = '20px Arial Bold';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
                                                         ctx.fillText(`${member.user.username}`, 200, 154);
                             
                             //server name
                              ctx.font = '20px Arial';
                              ctx.fontSize = '28px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
   ctx.fillText(` Welcome to ${member.guild.name} server` , 200, 190);
   
   

    welcomer.sendFile(canvas.toBuffer())
      
      });
      });
      });


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})



client.on('message', (message)=>{
        if (message.content.startsWith(`+embed`)) {
                var embed = new Discord.RichEmbed()
                .setAuthor(client.user.username,client.user.avatarURL)
                .setTitle("Message By " + message.author.tag)
                .setDescription(message.content.split(" ").join(" ").slice(7))
                .setColor("RANDOM")
                .setThumbnail(message.author.avatarURL)
                message.channel.send(embed);
        } else if (message.content.startsWith(`+say`)) {
                message.channel.send(message.content.split(" ").join(" ").slice(5));
        };
})

client.on('message', message => {                      
    if(!message.channel.guild) return;
       if(message.content.startsWith(prefix + 'color')) {
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
       message.channel.sendFile(`https://media.discordapp.net/attachments/444071272503050241/450979273206005780/colors.png`).then(msg => {
        
        
        
        msg.react('❤').then(r=>{
        msg.react('💛').then(r=>{
        msg.react('💚').then(r=>{
        msg.react('🖤').then(r=>{
        msg.react('💜').then(r=>{
        msg.react('💙').then(r=>{
        msg.react('❌').then(r=>{


       
   


    
     
     let activeFilter = (reaction, user) => reaction.emoji.name === '❤' && user.id === message.author.id;
     
       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
      
                                    //red                    
                               active.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "red"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#ff0000")

      .setDescription("**:art:تم اعطائك اللون الاحمر**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})


//لون اسود


 let y1Filter = (reaction, user) => reaction.emoji.name === '🖤' && user.id === message.author.id;
     
       let y1 = msg.createReactionCollector(y1Filter, { time: 15000 });
      
                                    //t                    
                               y1.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "black"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#0c0606")

      .setDescription("**:art:تم اعطائك اللون الاسود**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();



   })

 //لون اصفر 
let y2Filter = (reaction, user) => reaction.emoji.name === '💛' && user.id === message.author.id;
     
       let y2 = msg.createReactionCollector(y2Filter, { time: 15000 });
      
                                                    
                               y2.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "yellow"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#e7fa02")

      .setDescription("**:art:تم اعطائك اللون الاصفر**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();


 
                               })
                               
                               //الون الاخضر

let y3Filter = (reaction, user) => reaction.emoji.name === '💚' && user.id === message.author.id;
     
       let y3 = msg.createReactionCollector(y3Filter, { time: 15000 });
      
                                                    
                               y3.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "y1"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#09fa2a")

      .setDescription("**:art:تم اعطائك اللون الاخضر**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();
 })
    //الون البنفسجي

let y4Filter = (reaction, user) => reaction.emoji.name === '💜' && user.id === message.author.id;
     
       let y4 = msg.createReactionCollector(y4Filter, { time: 15000 });
      
                                                    
                               y4.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "y2"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#9e1bce")

      .setDescription("**:art:تم اعطائك اللون البنفسجي**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();
})
   //الون الازرق فاتح

let y5Filter = (reaction, user) => reaction.emoji.name === '💙' && user.id === message.author.id;
     
       let y5 = msg.createReactionCollector(y5Filter, { time: 15000 });
      
                                                    
                               y5.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "y3"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#0bc0f7")

      .setDescription("**:art:تم اعطائك اللون اللبني**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})
let y6Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
     
       let y6 = msg.createReactionCollector(y6Filter, { time: 15000 });
      
                                                    
                               y6.on("collect", r => {
                                   message.member.removeRole(message.guild.roles.find("name", "red"))
                                   
                                   message.member.removeRole(message.guild.roles.find("name", "y3"))
                                   message.member.removeRole(message.guild.roles.find("name", "black"))
                                   message.member.removeRole(message.guild.roles.find("name", "yellow"))
                                  message.member.removeRole(message.guild.roles.find("name", "y1"))
                                  message.member.removeRole(message.guild.roles.find("name", "y2"))
                                  
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")

      .setDescription("**:art:تم ازالة اللون**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();


                               })
        })
})
})
        
})
})
})
})
                               
                                   })
       }
                                   
                                   }); 

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
