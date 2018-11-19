const crypto = require('crypto')
const config = require('../../config/config')

function hashPassword(password) {

  var iteration = 10000;
  const hash = crypto.createHmac(config.hashAlgorithm, config.salt);
  hash.update(password);
  return hash.digest('hex');

}

module.exports = hashPassword;