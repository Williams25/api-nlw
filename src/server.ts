import dotenv from 'dotenv'
import { app } from './app'

dotenv.config()

app.listen(process.env.PORT || 3333, () => console.log(`http://localhost:${process.env.PORT || 3333}`))