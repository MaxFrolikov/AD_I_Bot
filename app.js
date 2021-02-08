const TelegramBot = require('node-telegram-bot-api'); 
const bot = new TelegramBot('1676966787:AAHBsJQohg8uEyRfPd626_x35OfmlGKGwdU', {polling: true});


bot.onText (/\/start/, (msg) => {
  console.log(msg.from.first_name)
  bot.sendMessage (msg.chat.id, 'Вы хотите приобрести рекламу на канале?',
  {
    reply_markup: JSON.stringify({
      inline_keyboard: [[
        {text: 'Нет', callback_data: 'Нет'},
        {text: 'Да',  callback_data: 'Да'}
      ]]
    })
  })
});

bot.on('callback_query', (msg) => {
  if(msg.data == 'Нет')
    bot.sendMessage (msg.message.chat.id, 'Спасибо, всего хорошего!')
  if(msg.data == 'Да')
    bot.sendMessage (msg.message.chat.id, 'Реклама на канале не продаётся...')
});
