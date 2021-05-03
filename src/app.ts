import express from 'express'
import { error, corsConfig } from './middlewares'
import { router } from './routes'

import createConnection from './connection'
createConnection()

import { createServer } from 'http'
import { Server, Socket } from 'socket.io'
import path from 'path'

const app = express()

app.use(express.static(path.join(__dirname, '..', 'public')))
app.set('views', path.join(__dirname, '..', 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('/pages/client', (req, res) => {
  return res.render('html/client.html')
})

app.get('/pages/admin', (req, res) => {
  return res.render('html/admin.html')
})


const http = createServer(app)
const io = new Server(http)

io.on('connection', (socket: Socket) => {
  console.log('connection ', socket.id)
})

app.use(express.json())

corsConfig(app)
app.use(router)
error(app)

export default { http, io }