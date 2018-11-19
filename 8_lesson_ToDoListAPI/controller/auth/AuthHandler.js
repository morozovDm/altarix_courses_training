const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
var router = express.Router()
var config = require('../../config/config')
var AuthHandler = require('./AuthHandler')
var VerifyToken = require('../helpers/VerifyToken')
var User = require('../../model/user')
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

var login = (req, res) => {
  var { username, password } = req.body
  User.findOne({ username }, function (err, user) {

    if (err) return res.status(500).send('Error on server')
    if (!user) return res.status(404).send('User not found')

    var isValid = password === user.password;
    if (!isValid) return res.status(401).send({ auth: false, token: null });

    var token = jwt.sign({ id: user._id }, config.jwtSecret, { expressIn: 86400 })

    res.status(200).send({ auth: true, token: token })
  })
}

var logout = (req, res) => {
  res.status(200).send({ auth: false, token: null })
}

var register = (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
  },
    function (err, user) {
      if (err) return res.status(500).send('There was a problem registering the user')

      var token = jwt.sign({ id: user._id }, config.jwtSecret, { expressIn: 86400 })
      res.status(200).send({ auth: true, token: token })
    })
}

var me = (req, res, next) => {
  User.findById(req.userId, { password: 0 }, (err, user) => {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    res.status(200).send(user);
  })
  next();
}

module.exports = {
  login,
  logout,
  register,
  me
}