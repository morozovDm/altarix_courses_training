import crypto from 'crypto';
import config from '@config/config';

const hashPassword = (password: string) => {
  const iteration = 10000;
  const hash = crypto.createHmac(config.hashAlgorithm, config.salt);
  hash.update(password);
  return hash.digest('hex');
}

export default hashPassword;

