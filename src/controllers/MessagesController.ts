import { Request, Response } from 'express'
import { MessagesServices } from '../services'

const service = () => new MessagesServices()

class MessagesController {

  async create(req: Request, res: Response) {
    try {
      const { admin_id, text, user_id } = req.body

      const settings = await service().create({ admin_id, text, user_id })
      return res.status(201).json(settings)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }

  async listByUserId(req: Request, res: Response) {
    try {
      const { user_id } = req.params

      const users = await service().listByUserId(user_id)
      return res.status(200).json(users)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
}

export { MessagesController }