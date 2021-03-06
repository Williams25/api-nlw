import dotenv from 'dotenv'
import app from './app'
import './websocket/client'
import './websocket/admin'

const { http } = app
dotenv.config()

http.listen(process.env.PORT || 3333, () => console.log(`http://localhost:${process.env.PORT || 3333}`))