const Discord = require('discord.js-selfbot-v13');
module.exports = {
  name: 'owo',
  description: 'owo',
  run: async (client, message, args) => {	
    const string = args.join(' ')
	   const embed = new Discord.WebEmbed()
      .setTitle('OWO WIKI')
      .setColor('RANDOM')
      .setDescription(`[⚜️] Level\n[⚜️] HuntBot\n[⚜️] Rate\n[⚜️]Ticket\n\nUsage: !owo {type}\nExample: !owo level`)
    if (!string) return message.channel.send({ embeds: [embed] });
    if(string == "level"){
    message.channel.send(`Làm gì để level tăng?
Bằng cách chat trên discord bạn sẽ nhận được khoảng 10-15XP mỗi phút 
Gửi tin nhắn đầu tiên trong ngày : 500XP 
Daily sẽ nhận được : 100 XP 
Spam và sử dụng bot sẽ không tính 
1 ngày có thể tối đa nhận được 3000 XP`);
    message.channel.send(`https://imgur.com/E2ZufiL`);
    message.channel.send(`https://imgur.com/ymYyPo8`); 
	}
	if(string == "huntbot"){
    message.channel.send(`Efficiency ( Hiệu Năng ) : tăng số pet hunt được /1h

Duration ( Thời Gian ) : Thời gian càng lâu hunt càng nhiều thú

Cost : Giảm Số Tiền hunt bot xuống 

Gain : Khi Hunt Bot xong sẽ nhận được điểm Animal Essence 

Experience ( Kinh nghiệm) : Khi huntbot xong thì sẽ nhận điểm exp , điểm exp này + vào thú ở trong team không phải là bản thân 

Radar : giúp bạn hunt ra loại thú mà chỉ có huntbot mới có , nâng càng cao tỷ lệ hunt thú b càng nhiều

*Animal Essence : dùng để nâng cấp các dòng trên . Nhận Được Khi sacrifice thú hoặc khi hunbot xong ( Gain > lv 1 )`);
    message.channel.send(`https://imgur.com/iJFuAga`);
	}
	if(string == "rate"){
    message.channel.send(`Tỉ lệ Hunt Thú và Gamble`);
    message.channel.send(`https://imgur.com/flxyXAU`);
	}
	if(string == "ticket"){
    message.channel.send(`WRAPPED TICKET: Khi mua từ web chính chủ của bot, sẽ nhận được wrapped ticket, có thể dùng để trade lấy cow.
UNWARPPED TICKET: Nhận được bằng cách trade qua cow và sẽ không thể bán được, chỉ tặng (aka ticket 14) ( Giới hạn 1 ticket 1 ngày )
Ví dụ: A mua từ site owo và trade qua cho B, thì B sẽ chỉ tặng ticket chứ không bán được qua cow cho C 
lệnh trade: owotrade 10 (người chơi) ( lượng tiền ) ( số lượng ) [MAX 2M COW 1 TICKET]
lệnh gift: owogift 14 (người chơi)`);
	}
  }
}