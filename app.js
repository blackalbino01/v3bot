const runBot = require('./price-range-bot');

async function startApp() {
  try {
    await runBot();
  } catch (error) {
    console.error(error);
  }
}

startApp();
