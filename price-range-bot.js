require('dotenv').config();
const Web3 = require('web3');
const web3 = new Web3('https://bsc-dataseed1.binance.org:443');
const request = require('request');

module.exports = async function runBot() {
    setInterval(async () => {
        try {
          //Retrieve the token price
          const tokenPriceURL = await fetch('https://api.binance.com/api/v1/ticker/price?symbol=BNBUSDT');
          const tokenPrice = await tokenPriceURL.json();
          const tokenPriceUSD = tokenPrice.price;
      
          // Calculate the optimal LP range
          const lowerPriceBound = tokenPriceUSD - 1;
          const upperPriceBound = tokenPriceUSD + 1;
      
          // Set the LP range using the PancakeSwap V3 API
          await pancakeSwapV3Contract.methods.setTickSpacing(60).send({ from: process.env.WALLET_ADDRESS });
          await pancakeSwapV3Contract.methods.initialize(process.env.BNB, process.env.BUSD, lowerPriceBound, upperPriceBound, 0, 0).send({ from: process.env.WALLET_ADDRESS });
            console.log(tokenPriceUSD);
        } catch (err) {
          console.error(`Error updating LP range: ${err}`);
        }
      }, 1000); // Execute the loop every second (60 seconds)
      
};
  