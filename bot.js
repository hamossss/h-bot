const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");// npm i fs
const moment = require("moment");// npm i fs
var jimp = require('jimp');// npm i jimp
var Canvas = require('canvas');// npm i canvas
   
 
const prefix = '!'
const mmss = require('ms');
 
 
 
 
 
 
 
 
bot.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Scrpit By ┃ SOON`);
        console.log(`----------------`);
      console.log(`ON ${bot.guilds.size} Servers '     Bot By KOON' `);
    console.log(`----------------`);
  console.log(`Logged in as ${bot.user.tag}!`);
bot.user.setGame(` hamo SERVER `,"http://twitch.tv/S-F")
bot.user.setStatus("dnd")
});
 
 
 
 
bot.on('message', message => {
  if(!message.channel.guild) return;
if(message.content.startsWith('bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "Dragon";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
 
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('Server', message.guild.name)
.addField('Sender', message.author.username)
.addField('Message', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, bot.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});
 
 
 
 
 
 
 
 
    bot.on('message', message => {
 
 
if (message.content ===  "قفل الشات") {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You don’t have `Manage Messages` permissions**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
 
           }).then(() => {
               message.reply("تم تقفيل الشات ✅ ")
           });
}
  if (message.content ===  "فتح الشات") {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You don’t have `Manage Messages` permissions**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true
 
           }).then(() => {
               message.reply("تم فتح الشات ✅ ")
           });
}
 
 
});
 
 
 
 
 
 
 
 
 
   
   
   
   
   
   
   
   
   
bot.on('message',function(message) {
    let toKick = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
   if(message.content.startsWith('kick')) {
       if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply('**# - You dont have enough permissions!**');
       if(toKick.bannable) return message.reply("**# - I cannot kick someone with a higher role than me!**");
       if(!toReason) return message.reply("**# - Supply a reason!**")
       if(toKick.id === message.author.id) return message.reply("**# You cannot kick yourself!**")
       if(!message.guild.member(toKick).bannable) return message.reply("**# - I cannot ban this person!**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("You have been kicked from a server!")
       .setThumbnail(toKick.avatarURL)
       .addField("**# - Server:**",message.guild.name,true)
       .addField("**# - Reason:**",toReason,true)
       .addField("**# - Kicked By:**",message.author,true)
       if(message.member.hasPermission("KICK_MEMBERS")) return (
           toKick.sendMessage({embed: toEmbed}).then(() => message.guild.member(toKick).kick()).then(() => message.channel.send(`**# Done! I kicked: ${toKick}**`))
       )
       }
});
 
 
 
 
 
bot.on('message', message => {
if(message.content.startsWith( 'سحب الكل')) {
 if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
   if(!message.guild.member(bot.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send(`**تم سحب جميع الأعضاء إليك**`)
 
 
 }
   });
bot.on("message", function(message) {
    let toBan = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
   if(message.content.startsWith( "ban")) {
       if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("**# - You dont have enough permissions!**");
       if(!toBan) return message.reply("**# - Mention a user!**");
       if(toBan.id === ("447121312960479242")) return message.reply("**# You cannot ban me!**");
       if(toBan === message.member.guild.owner) return message.reply("**# You cannot ban the owner of the server!**");
       if(toBan.bannable) return message.reply("**# - I cannot ban someone with a higher role than me!**");
       if(!toReason) return message.reply("**# - Supply a reason!**")
       if(toBan.id === message.author.id) return message.reply("**# You cannot ban yourself!**")
       if(!message.guild.member(toBan).bannable) return message.reply("**# - I cannot ban this person!**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("You have been banned from a server!")
       .setThumbnail(toBan.avatarURL)
       .addField("**# - Server:**",message.guild.name,true)
       .addField("**# - Reason:**",toReason,true)
       .addField("**# - Banned By:**",message.author,true)
       if(message.member.hasPermission("BAN_MEMBERS")) return (
           toBan.sendMessage({embed: toEmbed}).then(() => message.guild.member(toBan).ban({reason: toReason})).then(() => message.channel.send(`**# Done! I banned: ${toBan}**`))
       );
       
   }
});
 
 
 
 
 
 
 
 
    bot.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith( 'سحب')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }
}
});
 
 
 
bot.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);
 
    if(command === "مسح") {
        const emoji = bot.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
   msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});
 
 
 
 
 
 
 
 
const devs = ['340568730037911554' , '391668186896138250'];//ايديك هنا
const adminprefix = "!";//برفكس الادمن
bot.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'ply')) {
  bot.user.setGame(argresult);
      message.channel.sendMessage(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'wt')) {
  bot.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {
  bot.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    bot.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**✅   ${argresult}**`)
  }
  });
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  let sw = JSON.parse(fs.readFileSync("./js/setWlc.json", "UTF8"))
 
    bot.on('message', message => {
const Canvas = require("canvas") // npm i canvas
const fs = require("fs") // npm i fs
 
        let mothed = ['text', 'embed', 'image'];
        let sets = message.content.split(" ").slice(1).join(" ")
        let style = message.content.split(" ").slice(2).join(" ")
        let stym = message.content.split(" ").slice(3).join(" ")
        let msz = message.content.split(" ").slice(2).join(" ")
        let ch = message.content.split(" ").slice(2).join(" ")
        let r = message.content.split(" ").slice(4).join(" ")
 
 
        if(message.content.startsWith(prefix + "setWlc")) {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You need `Manage Channels` permission**")
            if(!sw[message.guild.id]) sw[message.guild.id] = {
                cha: "welcome",
                msz: "Welcome Bro",
                styler: "text"
            };
 
            if(!sets) {
                message.channel.send(`**Usage:
            ${prefix}setWlc style <text, image, embed>
            ${prefix}setWlc msg <message>
            ${prefix}setWlc channal <channel name>**`)
            }
 
            if(!mothed) {
                message.channel.send(`**Usage: ${prefix}setWlc style <text, imgae, embed>**`)
            }
 
            if(message.content === prefix + 'setWlc style image') {
                if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You need `Manage Channels` permission**")
                sw[message.guild.id].styler = 'image'
                message.channel.send(`**Your server welcome mothed has been changed to ${sw[message.guild.id].styler}**`)
            }
 
            if(message.content === prefix + 'setWlc style embed') {
                if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You need `Manage Channels` permission**")
                 sw[message.guild.id].styler = 'embed'
                message.channel.send(`**Your server welcome mothed has been changed to ${sw[message.guild.id].styler}**`)            }
 
            if(message.content === prefix + 'setWlc style text') {
                if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You need `Manage Channels` permission**")
                 sw[message.guild.id].styler = 'text'
                message.channel.send(`**Your server welcome mothed has been changed to ${sw[message.guild.id].styler}**`)
            }
 
        }
 
        if(message.content.startsWith(prefix + "setWlc msg")) {
            if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**You need `Manage Messages` permission**")
            if(!msz) {
                message.channel.send("Usage: <setWlc msg <message>")
            } else {
                message.channel.send(`**Your server welcome message has been changed to __${msz}__**`)
                sw[message.guild.id].msk = msz
            }
        }
 
        if(message.content.startsWith(prefix + "setWlc channel")) {
            if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You need `Manage Channels` permission**")
            if(!ch) {
                message.channel.send("Usage: <setWlc channel <channel name>")
            }
            let chn = message.guild.channels.find("name", ch)
            if(!chn) {
                message.channel.send("**I can't find this channel**")
            }
            else {
                 sw[message.guild.id].cha = chn.name
                 message.channel.send(`**Your server welcome channel has been changed to __${chn.name}__**`)
                 }
        }
 
        fs.writeFile('./setWlc.json', JSON.stringify(sw), (err) => {
if (err) console.error(err);
})
})
 
 
bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find("name", sw[member.guild.id].cha);
    if(sw[member.guild.id].styler === "text") {
        channel.sendMessage(`<@${member.user.id}>, ${sw[member.guild.id].msk}`)
    }
 
    if(sw[member.guild.id].styler === "embed") {
 
        const embed = new Discord.RichEmbed()
        .setTitle("Member joind.")
        .setColor("GREEN")
        .setThumbnail(member.user.avatarURL)
        .setDescription(`**${sw[member.guild.id].msk}**`)
        .addField("**Member name**", `[<@${member.user.id}>]`,true)
        .addField("**Now we are**", `[${member.guild.memberCount}]`,true)
        channel.sendMessage(`<@${member.user.id}>`)
        channel.sendEmbed(embed)
    }
 
    if(sw[member.guild.id].styler === "image") {
        if (member.user.bot) return;
const w = ['./img/image.png'];
        let Image = Canvas.Image,
            canvas = new Canvas(749, 198),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.stroke();
        ctx.beginPath();
 
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 749, 198);
 
})
 
                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                 if (err) return console.log(err);
 
ctx.font = '35px Aeland';
                        ctx.fontSize = '40px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(" Welcome to " + member.guild.name , 440, 25);
 
                        //ur name
                        ctx.font = '40px Impact';
                        ctx.fontSize = '48px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 420, 100);
 
                         ctx.font = '30px Impact';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(sw[member.guild.id].msk, 410, 170);
 
 
                        //Avatar
                        let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(115, 100, 90, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 5, 5, 200, 200);
                                 channel.sendMessage(`<@${member.user.id}>`)
        channel.sendFile(canvas.toBuffer())
   
 
 
 
})
})
 
    }
 
})
 
var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
bot.on("ready", () => {
    var guild;
    while (!guild)
        guild = bot.guilds.find("name", "B3TRAH  بــعــثــرــه")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
})
bot.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find('name', 'b3trah');
    if (!channel) {
        console.log("!channel fails");
        return;
    }
    if (member.id == bot.user.id) {
        return;
    }
    console.log('made it till here!');
    var guild;
    while (!guild)
        guild = bot.guilds.find("name", "B3TRAH  بــعــثــرــه")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(3);
                    console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
 channel.send(` ♥ ***تم دعوته من قبل*** ${Invite.inviter} ♥ `)            
 }
            dat[Inv] = Invite.uses;
        })
    })
});
 
 
 
 
 
 
bot.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has ${inviteCount} invites.`);
});
  }
});
 
 
 
 
 
 
 
 
 
 
 
 
bot.on('message', message => {
 
    if (message.content.startsWith("رابط")) {        
  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(" :white_check_mark: تم ارسال الرابط على الخاص ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
---------------------
 :kissing_closed_eyes:  - هذا الرابط صالح ل 100 مستخدم فقط
---------------------
 :smiley: - هذا الرابط صالح لمده 24 ساعه فقط
---------------------`)
      message.author.sendEmbed(Embed11)
    }
 
});
bot.on('guildCreate', guild => {
guild.leave()
});
 
 
 
 
bot.on("guildMemberAdd", eyad => {
  eyad.createDM().then(function (channel) {
  return channel.send("  𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝘽3𝙏𝙍𝘼𝙃 𝙎𝙀𝙍𝙑𝙀𝙍 ")    ترحيب خاص
}).catch(console.error)
})
   
   
   
   
 
 
 
 
 
 
 
 
const developers = ["340568730037911554",""]
 
const adminprefixe = "!";
bot.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'ply')) {
    bot.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  bot.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {
  bot.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    bot.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  bot.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  bot.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
     
 
 
client.login(process.env.BOT_TOKEN);
