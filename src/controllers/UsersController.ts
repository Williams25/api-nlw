import { Request, Response } from 'express'
import { UsersServices } from '../services'

const service = () => new UsersServices()

class UsersController {

  async create(req: Request, res: Response) {
    try {
      const { email } = req.body
      
      const user = await service().create({ email })
      return res.status(201).json(user)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }

  async find(req: Request, res: Response) {
    try {
      const {user_id} = req.params
      
      const users = await service().findById(user_id)
      return res.status(200).json(users)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
}

export { UsersController }