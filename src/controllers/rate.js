const litecoinRates = require('../services/litecoinRates');
const log = require('../lib/log');

exports.list = (req, res, next) => {
  log.debug('Pulling LTC Rate information from APIs');
  litecoinRates.getAll().then((rates) => {
    res.json(rates);
  }).catch(next);
};
