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


client.on('message', message=>{
    if (message.content === "!welcon"){
        if (message.channel.guild) { // if message from the guild , not private 
            if (message.member.hasPermission(8)){ // 8 = Administrator
            fs.writeFile('./welc.json', JSON.stringify(message.guild.id, 'on')) // writing on JSON 
            message.channel.sendMessage('Done') //ON!
        } else {
        message.channel.sendMessage('You CANT EVER DO THAT COMMAND !')
    }
    }else {
            message.channel.sendMessage('you cant use this command here,') 
        }
    }
});
client.on('message',message =>{
    if (message.content==="!welcoff"){ // turn off the img welcome :palm_face:
        if (message.channel.guild) { // if message from the guild , not private 
            if (message.member.hasPermission(8)){ // if member have Administrator permission  , ( 8 = Adminstrator)
                fs.writeFile('welc.json', JSON.stringify(message.guild.id, 'off')) // writing on FS ( JSON ) as off
                message.channel.sendMessage('Done') // OFF!
            }
        } else{
            message.channel.sendMessage('YOU CANT USE THIS COMMAND HERE! :x:') //if someone send this command on private will reply
        }
    }
})
client.on('guildMemberAdd', member => {
var Canvas = require('canvas') //npm i canvas
var jimp = require('jimp') //npm i jimp

const w = ['./img/w1.jpg','./img/w2.jpg','./img/w3.jpg','./img/w4.jpg','./img/w6.jpg','./img/w7.png','./img/w8.png',
'./img/w9.png','./img/w10.png','./img/w11.png','./img/w12.png','./img/w13.png','./img/w14.png','./img/w15.png','./img/w16.png'
,'./img/kk.png','./img/rb.png']; // you need to add Image welcome [ const w = [ './img/w1.jpg','./img/w2.jpg']; ] 

        let Image = Canvas.Image,
            canvas = new Canvas(401, 202),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
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

                        //Avatar
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.drawImage(ava, 152, 27, 95, 95);

                                                //wl
                        ctx.font = '20px Arial Bold';
                        ctx.fontSize = '25px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(`You are the  ${member.guild.memberCount}th`, 200, 190); //MemberCount

                        //ur name
                        ctx.font = '20px Arial';
                        ctx.fontSize = '28px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 200, 154); //shows username!

member.guild.channels.find('id', welc[member.guild.id].imgwelc).sendFile(canvas.toBuffer());




})
})

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
