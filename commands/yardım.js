const Discord = require('discord.js');
exports.run = (client, message, args) => {
 
  const embed = new Discord.MessageEmbed()
  .setColor("#000000")
       .setDescription(`**Önemli Komutlarınız;**\`\`\`c!sunucu-kayıt  ┃ c!karşılama-mesaj

c!ban-sistem    ┃ c!komut-cevap-sistem

c!mute-sistem   ┃ c!ses-mute-sistem

c!sayaç-sistem  ┃ c!karantina-sistem

c!fake-sistem   ┃ c!yasak-tag-sistem

c!seviye-sistem ┃ c!oto-isim-sistem

c!şablon-sistem ┃ c!tag-rol-sistem \`\`\`
**Diğer önemli Komutlarınız;**\`\`\`- c!içerikler ┃ c!diğer

- c!korumalar ┃ c!diğer2\`\`\`
`)
.setImage(`https://i.hizliresim.com/vVw30D.jpg`)

  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};
exports.help = {
  name: 'yardım',
  description: 'yardım',
  usage: 'yardım'
};


