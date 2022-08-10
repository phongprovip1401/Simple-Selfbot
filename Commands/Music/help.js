const Discord = require('discord.js-selfbot-v13');

module.exports = {
  name: 'help',
  description: 'Help command',
  aliases: ['h', 'cmd', 'command'],
  run: async (client, message) => {
    const commands = client.commands.map(cmd => `\`${cmd.name}\``).join(', ')
  
    const embed = new Discord.WebEmbed()
      .setTitle('All commands')
      .setColor('RANDOM')
      .setDescription(commands)

    message.channel.send({ embeds: [embed] });
  }
}
