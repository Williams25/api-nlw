import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { SettingsRepository } from '../repositories'

class SettingsControlller {
  async create(req: Request, res: Response) {
    try {
      const settingsRepository = getCustomRepository(SettingsRepository)
      const { chat, userName } = req.body

      const settings = await settingsRepository.create({
        chat,
        userName
      })

      await settingsRepository.save(settings)

      return res.status(201).json(settings)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }

  async find(req: Request, res: Response) {
    try {
      const settingsRepository = getCustomRepository(SettingsRepository)
      const settings = await settingsRepository.find()
      return res.status(200).json(settings)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
}

export { SettingsControlller }