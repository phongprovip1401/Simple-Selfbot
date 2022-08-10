const Discord = require('discord.js-selfbot-v13');
module.exports = {
	name: 'avatar',
	aliases: ['avt', 'ava'],
	// Add some data here
	run: async (client, message, args) => {
		const member = message.guild.members.cache.filter((m) => {
            m.user.id == args[0] || m.displayName == args[0] || m.user.username == args[0]
        }).first() || message.mentions.members.first() || message.member;
        const avatarURL = member.user.displayAvatarURL({ format: 'png', dynamic: true });
        const embed = new Discord.WebEmbed()
        .setAuthor({ name: member.user.tag })
        .setColor('RANDOM')
        .setImage(avatarURL)
        message.reply({ embeds: [embed] });
	},
};
