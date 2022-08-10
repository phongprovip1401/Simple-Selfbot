const BetterMarkdown = require("discord-bettermarkdown");
module.exports = {
  name: 'serverinfo',
  description: 'xem thông tin máy chủ',
  run: async function infoServ (client, message, process) {
  const messageGuild = new BetterMarkdown()

  if (!message.guild) { return message.channel.send('This guild is not a guild server') }

  const server = message.guild

  const owner = client.users.cache.find(user => user.id === server.ownerId)

  messageGuild.format('SERVER INFORMATION', 'UNDERLINE', 'RED', 'INDIGO', false)

  messageGuild.format('', 'BOLD', 'RED', null, false)
  messageGuild.format('\n\nName : ', 'BOLD', 'YELLOW', null, false)
  messageGuild.format(server.name, 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageGuild.format('Description : ', 'BOLD', 'YELLOW', null, false)
  messageGuild.format(server.description, 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageGuild.format('Owner : ', 'BOLD', 'YELLOW', null, false)
  messageGuild.format(owner.username + '#' + owner.discriminator, 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageGuild.format('Region : ', 'BOLD', 'YELLOW', null, false)
  messageGuild.format(server.region, 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageGuild.format('Creation date : ', 'BOLD', 'YELLOW', null, false)
  messageGuild.format(server.createdAt.toLocaleString(), 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageGuild.format('Members : ', 'BOLD', 'YELLOW', null, false)
  messageGuild.format(server.memberCount, 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageGuild.format('Channels : ', 'BOLD', 'YELLOW', null, false)
  messageGuild.format(server.channels.cache.size, 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageGuild.format('Roles : ', 'BOLD', 'YELLOW', null, false)
  messageGuild.format(server.roles.cache.size, 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageGuild.format('Emojis : ', 'BOLD', 'YELLOW', null, false)
  messageGuild.format(server.emojis.cache.size, 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageGuild.format('Voice channels : ', 'BOLD', 'YELLOW', null, false)
  messageGuild.format(server.channels.cache.filter(channel => channel.type === 'GUILD_VOICE').size, 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageGuild.format('Text channels : ', 'BOLD', 'YELLOW', null, false)
  messageGuild.format(server.channels.cache.filter(channel => channel.type === 'GUILD_TEXT').size, 'BOLD', 'BLUE', 'DARKBLUE', true)

  await message.channel.send(messageGuild.toCodeblock())
  }
}
