import { Express, Request, Response, NextFunction } from 'express'
import morgan from 'morgan'

export const corsConfig = (app: Express) => {
  app.use(morgan('dev'))

  app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*') // configurando cors
    res.header('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization')

    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
      return res.status(200).send({})
    }

    next()
  })
}