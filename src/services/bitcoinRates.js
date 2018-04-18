const request = require('request-promise-native');

const bitcoinRates = {
  getAll() {
    return Promise.all([
      request({ uri: 'https://api.coinmarketcap.com/v1/ticker/bitcoin/', json: true }),
      request({ uri: 'https://bitpay.com/api/rates', json: true }),
    ]).then((results) => {
      const cmcData = results[0]; // results from coinmarketcap
      const bitpayData = results[1]; // results from bitpay
      const bitcoinBtcExchangeRate = cmcData[0].price_btc;
      const rates = [];

      bitpayData.forEach((value) => {
        const exchangeRate = bitcoinBtcExchangeRate * value.rate;
        rates.push({ code: value.code, name: value.name, rate: exchangeRate });
      });

      return rates;
    });
  },
};

module.exports = bitcoinRates;