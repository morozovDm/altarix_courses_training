import express from 'express'
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'
var router = express.Router()
import config from '../../config/config'
import User from '../../model/user'
import HashPassword from '../helpers/HashPassword'
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

var login = (req:any, res:any) => {
  let { username, password } = req.body
  User.findOne({ username }, function (err, user:any) {

    if (err) return res.status(500).send('Error on server')
    if (!user) return res.status(404).send('User not found')

    var isValid = HashPassword(password) === user.password;
    if (!isValid) return res.status(401).send({ auth: false, token: null });

    var token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: 86400 })
    res.status(200).send({ auth: true, token: token })
  })
}

var logout = (req:any, res:any) => {
  res.status(200).send({ auth: false, token: null })
}

var register = (req:any, res:any) => {
  let { username, password } = req.body
  User.findOne({ username })
    .exec()
    .then((user) => {
      if (user) {
        return res.status(401).json({ message: "username is taken, please try again" })
      }
      password = HashPassword(password)
      new User({ username, password }).save().then((item:any) => {
        console.log("DB Item saved --->", item);
        res.status(200).send("item saved to database");
      }).catch((err:any) => {
        res.status(400).send("unable to save to database");
      });
    }).catch(err => res.status(500).json({ message: err.message }))
}

var me = (req:any, res:any) => {
  User.findById(req.userId, { password: 0 }, (err, user) => {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    res.status(200).send(user);
  })
  // next();
}

export default {
  login,
  logout,
  register,
  me
}