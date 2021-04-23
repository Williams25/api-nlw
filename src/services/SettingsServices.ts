import { getCustomRepository, Repository } from 'typeorm'
import { Setting } from '../models'
import { SettingsRepository } from '../repositories'

interface CreateSettings {
  chat: boolean
  userName: string
}

class SettingsService {

  private repository: Repository<Setting>

  constructor() {
    this.repository = getCustomRepository(SettingsRepository)
  }

  async create({ chat, userName }: CreateSettings) {
    const userAlreadyExists = await this.repository.findOne({ userName })

    if (userAlreadyExists) throw new Error('User already exists')

    const settings = await this.repository.create({
      chat,
      userName
    })

    await this.repository.save(settings)
    return settings
  }

  async find() {
    return await this.repository.find()
  }

  async findByUserName(userName: string) {
    return await this.repository.findOne({ userName })
  }

  async update(userName: string, chat: boolean) {
    return await this.repository.update(userName, { chat })
  }
}

export { SettingsService }