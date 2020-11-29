const Discord = require("discord.js");
const Database = require("../Helpers/Database");

exports.run = async (client, message, args) => {
    const db = new Database("./Servers/" + message.guild.id, "Rewards");
    var data = db.get(`rewards`) || {};

    var list = data.sort((x, y) => y.targetInvite - x.targetInvite);
      if(list.length === 0){
        var yok = new Discord.MessageEmbed()
            .setAuthor(`<:Yanl:771056893217079357>  ・  Hiç Rütbe Ayarlanmamış Olarak Gözüküyor...`)
            .setDescription("Rütbe Ayarlamak İçin g!rütbe-ekle @rol DavetSayısı");
            return message.channel.send(yok);
        }

    var embed = new Discord.MessageEmbed()
        .setAuthor(`Gezend | Davet Sistemi`, `https://cdn.discordapp.com/attachments/568831784024801316/778882255245934592/Gezend_Logo.png`)
        .setImage(`https://cdn.discordapp.com/attachments/568831784024801316/778881448857829426/Gezend_Header.png`)
        .setFooter(`${message.author.username} Tarafından İstendi.`) 
        .setColor("BLUE")
        .addField("Rütbeler", `
   ** **${list.splice(0, 10).map((item, index) => `\`${index + 1}.\` <@&${item.Id}>: \`${item.Invite} Davete\``).join("\n")}
    `);

    message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["toplam-rütbeler"],
  permLevel: 0
};
exports.help = {
  name: 'rütbeler',
  description: 'Ödüllü Rütbeelr Listesine Bakarsınız.',
  usage: 'g!rütbeler'
};
