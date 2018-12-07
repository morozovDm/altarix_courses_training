import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import config from './config/config'
import AuthController from './controller/auth/AuthController'
import TaskController from './controller/task/TaskController'

var { appPort, mongoUri } = config

const app = express()
app.use(cors())
app.get('/', function (req, res) {
    res.status(200).send('API works.');
});

  app.use('/auth', AuthController)
  app.use('/task', TaskController)

let db = mongoose.connect(mongoUri)
    .then(() => {
        app.listen(
            appPort,
            () => console.log(`Listening on port ${appPort}`)
        )
    })
    .catch(err => console.log(`Error connecting to ${mongoUri}`))

