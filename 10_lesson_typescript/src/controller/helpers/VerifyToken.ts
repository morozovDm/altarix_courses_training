import jwt from 'jsonwebtoken'
import config  from '../../config/config'

function verifyToken(req:any, res:any, next:any) {

  const token = req.headers['x-access-token']
  if (!token) {
    return res.status(403).send({ auth: false, message: 'No token provided.' })
  }

  jwt.verify(token, config.jwtSecret, (err:any, decoded:any) => {
    if (err) {
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }

    req.userId = decoded.id;
    next();
  })
}

export default verifyToken;