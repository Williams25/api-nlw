import { Express, Request, Response, NextFunction } from 'express'

interface Errors {
  message: string,
  status: number
}

export const error = (app: Express) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    const erro: Errors = {
      message: 'Não encontrado',
      status: 404
    }
    next(erro)
  })

  app.use((error: Errors, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500)
    return res.send({
      erro: {
        message: error.message
      }
    })
  })
}