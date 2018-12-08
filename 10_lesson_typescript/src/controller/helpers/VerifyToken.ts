import jwt from 'jsonwebtoken';
import config from '@config/config';
import { Request, Response, NextFunction } from 'express';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.headers['x-access-token'];
  if (!token) {
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  }

  jwt.verify(token, config.jwtSecret, (err: Error) => {
    if (err) {
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
    next();
  })
}
export default verifyToken;