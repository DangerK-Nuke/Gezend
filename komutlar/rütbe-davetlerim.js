const Discord = require("discord.js");
const Database = require("../Helpers/Database");
// exports.onLoad = (client) => {};
/**
 * @param {Discord.Client} client 
 * @param {Discord.Message} message 
 * @param {Array<String>} args 
 */
exports.run = async (client, message, args) => {
    const db = new Database("./Servers/" + message.guild.id, "Invites");
    var data = db.get(`invites.${message.member.id}`) || { total: 0, fake: 0, inviter: null, regular: 0, bonus: 0, leave: 0 };
    var embed = new Discord.MessageEmbed()
    .setAuthor(`Gezend | Davet Sistemi`, `https://cdn.discordapp.com/attachments/568831784024801316/778882255245934592/Gezend_Logo.png`)
    .setTitle(`${message.author.username}  Davet  İstatistik`)
    .setImage(`https://cdn.discordapp.com/attachments/568831784024801316/778881448857829426/Gezend_Header.png`)
    .setFooter(`${message.author.username} Tarafından İstendi.`) 
    .setDescription(`**__Sunucuda Toplam__** \`${(data.total || 0) + (data.bonus || 0)}\` **__Davetin Var__** \n**__Sunucuda Davetinle__** \`${data.regular || 0}\` **__Düzenli Giriş Yapıldı__** \n**__Sunucuda Toplam__** \`${data.bonus || 0}\` **__Bonus Davetin Var__** \n**__Sunucudan Senin Davetinle__** \`${data.leave || 0}\` **__Şahıs Ayrıldı__** \n**__Senin Davetinle__** \`${data.fake || 0}\` **__Sahte Hesapla Girildi__** `)
    .setColor("BLUE");
    message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'davetlerim',
  description: 'Davet Sayınıza Bakarsınız.',
  usage: 'g!davetlerim'
};
