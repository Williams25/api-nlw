import express from 'express'
import { error, corsConfig } from './middlewares'

const app = express()
app.use(express.json())
corsConfig(app)

error(app)
export { app }