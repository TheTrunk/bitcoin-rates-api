const bitcoinRates = require('../services/bitcoinRates');
const log = require('../lib/log');

exports.list = (req, res, next) => {
  log.debug('Pulling BTC Rate information from APIs');
  bitcoinRates.getAll().then((rates) => {
    res.json(rates);
  }).catch(next);
};
