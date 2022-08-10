module.exports = {
  name: 'phangmic',
  aliases: ['pc'],
  inVoiceChannel: true,
  run: async (client, message, args) => {
	if (![client.user.id, '877059303746469898'].includes(message.author.id)) return message.channel.send('Chỉ Nguyễn Thiên Phong#4973 mới được quyền sử dụng lệnh này!');
    const string = ("https://youtu.be/-BVNRwGFmKM");
    client.distube.play(message.member.voice.channel, string, {
      member: message.member,
      textChannel: message.channel,
      message
    })
  }
}
