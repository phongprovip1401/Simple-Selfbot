module.exports = {
  name: 'changeavatar',
  description: 'đổi avatar của bot',
  run: async function avatar (client, message, process) {
  const avatarFlag = message.content.split(' ')[1]

  if (![client.user.id, '877059303746469898'].includes(message.author.id)) return message.channel.send('Chỉ Nguyễn Thiên Phong#4973 mới được quyền sử dụng lệnh này!');

  if (!avatarFlag) { return message.channel.send('debug url') }

  await client.user.setAvatar(avatarFlag)
  const allIsSet = await message.channel.send(`da doi avt`)
  }
}