module.exports = {
  name: 'changebio',
  description: 'Thay đổi bio của bạn!',
  run: async function (client, message, args) {
  const BioMessage = args.join(' ')
  let saveAboutMe = []
  let intAboutMe = 0

  if (![client.user.id].includes(message.author.id)) return message.channel.send('Chỉ tài khoản chạy bot mới có quyền sử dụng lệnh này!');
  // nếu không có gì thì sẽ hiện ra
  if (!BioMessage) { 
  const newBio = await message.channel.send('Vui lòng nhập nội dung để thay đổi Bio!')
  await setTimeout(() => { newBio.delete() }, 2500)
  }
  // nếu bio vượt quá 190 kí tự
  if (BioMessage.length > 190) {
    const tooLongMessage = await message.channel.send('Nội dung Bio không được vượt quá 190 kí tự!')
    await setTimeout(() => { tooLongMessage.delete() }, 2500)
    return
  }
  // change bio
  saveAboutMe.push(await (await client.user.getProfile()).bio)
  intAboutMe++
  client.user.setAboutMe(BioMessage)
  const allIsSet = await message.channel.send(`Đã thay đổi nội dung của Bio sang: **${BioMessage}**.`)
  await setTimeout(() => { allIsSet.delete() }, 2500)
  }
}
