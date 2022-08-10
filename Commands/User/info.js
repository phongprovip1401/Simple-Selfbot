const BetterMarkdown = require("discord-bettermarkdown");
module.exports = {
  name: 'info',
  description: 'xem thông tin người khác',
  run: async function infoUser (client, message, process) {
  const user = message.mentions.users.first()

  if (!user) { return message.channel.send('Bạn cần tag người đó') }


  const messageUser = new BetterMarkdown()

  messageUser.format('Informations to the user', 'UNDERLINE', 'RED', 'GRAY', false)

  messageUser.format('', 'BOLD', 'RED', null, false)
  messageUser.format('\n\nUsername : ', 'BOLD', 'YELLOW', null, false)
  messageUser.format(user.username, 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageUser.format('Tag : ', 'BOLD', 'YELLOW', null, false)
  messageUser.format(user.discriminator, 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageUser.format('ID : ', 'BOLD', 'YELLOW', null, false)
  messageUser.format(user.id, 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageUser.format('Created at : ', 'BOLD', 'YELLOW', null, false)
  messageUser.format(user.createdAt.toLocaleString(), 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageUser.format('Mutual Guild : ', 'BOLD', 'YELLOW', null, true)

  await client.guilds.cache.filter(guild => guild.members.cache.has(user.id)).forEach(guild => {
    messageUser.format('    ' + guild.name, 'BOLD', 'BLUE', 'DARKBLUE', true)
  })
  await message.channel.send(messageUser.toCodeblock())
  }
}
