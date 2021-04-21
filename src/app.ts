import createConnection from './connection'
createConnection()

import express from 'express'
import { error, corsConfig } from './middlewares'
import { router } from './routes'

const app = express()

app.use(express.json())

corsConfig(app)
app.use(router)
error(app)

export { app }