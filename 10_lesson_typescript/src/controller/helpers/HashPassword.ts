import crypto from 'crypto'
import config from '../../config/config'

function hashPassword(password:any) {

  const iteration = 10000;
  const hash = crypto.createHmac(config.hashAlgorithm, config.salt);
  hash.update(password);
  return hash.digest('hex');

}

export default hashPassword;