import { Request, Response } from 'express'
import { SettingsService } from '../services'

const service = () => new SettingsService()

class SettingsController {

  async create(req: Request, res: Response) {
    try {
      const { chat, userName } = req.body

      const settings = await service().create({ chat, userName })
      return res.status(201).json(settings)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }

  async find(req: Request, res: Response) {
    try {
      const settings = await service().find()
      return res.status(200).json(settings)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }

  async findByUserName(req: Request, res: Response) {
    try {
      const { userName } = req.params

      const settings = await service().findByUserName(userName)
      return res.status(200).json(settings)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { userName } = req.params
      const { chat } = req.body

      const settings = await service().update(userName, chat)
      return res.status(200).json(settings)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }

  }
}

export { SettingsController }