const express = require('express')
const bodyParser = require('body-parser')
var config = require('../../config/config')
var VerifyToken = require('../helpers/VerifyToken')
var AuthHandler = require('./AuthHandler')

var router = express.Router()
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post('/login', AuthHandler.login);
router.get('/logout', AuthHandler.logout);
router.post('/register', AuthHandler.register);
router.get('/me', VerifyToken, AuthHandler.me);

module.exports = router