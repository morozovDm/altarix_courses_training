import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import config from './config/config'
import AuthController from './controller/auth/AuthController'
import TaskController from './controller/task/TaskController'

const { appPort, mongoUri } = config

const app = express()
app.use(cors())
app.get('/', function (req:express.Request, res:express.Response) {
    res.status(200).send('API works.');
});

  app.use('/auth', AuthController)
  app.use('/task', TaskController)

const db = mongoose.connect(mongoUri)
    .then(() => {
        app.listen(
            appPort,
            () => console.log(`Listening on port ${appPort}`)
        )
    })
    .catch(err => console.log(`Error connecting to ${mongoUri}`))

