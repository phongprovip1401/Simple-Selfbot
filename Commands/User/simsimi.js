module.exports = {
  name: 'sim',
  description: 'simsimi',
  run: async (client, message, args) => {	
    const string = args.join(' ')
	const axios = require("axios")
    if (!string) return message.channel.send(`${client.emotes.error} | Null`)
  let res = await axios.get(`https://api.simsimi.net/v2/?text=${encodeURIComponent(string)}&lc=vn`)
  message.reply(res.data.success);
  }
}


