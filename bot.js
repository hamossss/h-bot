const Discord = require('discord.js');
const client = new Discord.Client();

   
 
const prefix = '$'
client.on('message',async message => {
  if(message.content.startsWith(prefix + "setvoice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});


client.on('message', function(msg) {
    if(msg.content.startsWith ('server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** server type**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __Roles__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ Members Number__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ Members Number who online__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ Text Channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ voice Channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ The Owner__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ Server ID__**',`**${msg.guild.id}**`,true)
      .addField('📅**__The date when the server created __**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

client.on('guildCreate', guild => {
  client.channels.get("اي دي الروم").send(`:white_check_mark: **تم اضافة البوت في سيرفر جديد مبروكك
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
client.on('guildDelete', guild => {
  client.channels.get("اي دي الروم").send(`:negative_squared_cross_mark: **طردوني حرام والله ايش سويت انا
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});


     
 client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === "$help") {
  let embed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
           .setThumbnail(message.author.avatarURL)
                 .setTimestamp()
    .setDescription(`
***
:white_small_square:  ( اوامر الادارة***
**
:small_orange_diamond:   البوت يكتب الي ��نت تكتبه في صورة
$say
:small_orange_diamond:   لمسح الشات
$clear
:small_orange_diamond:   للباند
$ban
:small_orange_diamond:   للطرد
$kick
:small_orange_diamond:   للارسال لاعضاء السيرفر بشكل مطور
$bc
:small_orange_diamond:   للارسال لاعضاء السيرفر بشكل عادي
$bcr
:small_orange_diamond:   لأعطاء شخص ميوت بالسيرفر - يلزم ان يكون بالسيرفر رتبة Muted
$mute
:small_orange_diamond:   لفك الميوت عن شخص
$unmute
:small_orange_diamond:   لااعطاء شخص رتبه
$role humans [role]
:small_orange_diamond:   لااعطاء الجميع رتبه
$role all [role]
:small_orange_diamond:   لااعطاء البوتات رتبه
$role bots [role]
----
**
***
:white_small_square: ( الاوامر العامة***
**
:small_blue_diamond:  للابلغ عن شخص
$report
:small_blue_diamond:  لعرض التاريخ والوقت 
$day
:small_blue_diamond:  للارسال اقتراح للادراه
$suggest
:small_blue_diamond:  معلومات السيرفر
$server
:small_blue_diamond:  لعرض اسكنك في ماين كرافت بشكل مطور
$mc3d
:small_blue_diamond:   اسكنك في ماين كرافت
$mcskin
:small_blue_diamond:   راس اسكنك في ماين كرافت
$skin
:small_blue_diamond:   اسئله عن ماين كرافت
$minecraft
:small_blue_diamond:   لااستعراض الحاسبه
$calculate
:small_blue_diamond:   احصائيات فورت نايت
$fortnite
 ----
رابط سيرفر البوت
 
----------
رابط دعوة البوت


**

`)
.setColor('RANDOM')
message.author.sendEmbed(embed)
}
});

client.on('message', msg => {
      if(!msg.channel.guild) return;
    if(msg.content.startsWith (prefix  + 'help')) {
    msg.reply('**📩 شيك علي الخاص**');
  }
});
 
client.login(process.env.BOT_TOKEN);
