const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('./config/config')
const app = express()
var { appPort, mongoUri } = config

app.use(cors())

app.get('/', function (req, res) {
  res.status(200).send('API works.');
});

var AuthController = require('./controller/auth/AuthController')
app.use('/auth', AuthController)

var TaskController = require('./controller/task/TaskController')
app.use('/task', TaskController)

var db = mongoose.connect(mongoUri)
  .then((req, res) => {

    app.listen(
      appPort,
      () => console.log(`Listening on port ${appPort}`)
    )
  })
  .catch(err => console.log(`Error connecting to ${mongoUri}`))
