require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');

const bot = new TelegramBot(process.env.BOT_TOKEN);
const channelId = process.env.CHANNEL_ID;

// Sends message every day at 9:00 AM India time
cron.schedule('0 9 * * *', async () => {
  try {
    await bot.sendMessage(channelId, '👋 Hello World! Good Morning! 🌅');
    console.log('✅ Message sent at', new Date().toLocaleString());
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}, {
  timezone: "Asia/Kolkata"
});

console.log('🤖 Bot is running! Will send message at 9 AM every day.');
