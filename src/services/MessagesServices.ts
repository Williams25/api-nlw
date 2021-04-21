import { getCustomRepository, Repository } from 'typeorm'
import { Message } from '../models'
import { MessagesRepository } from '../repositories'

interface CreateMessage {
  admin_id?: string
  text: string
  user_id: string
}

class MessagesServices {
  private repository: Repository<Message>

  constructor() {
    this.repository = getCustomRepository(MessagesRepository)
  }

  async create({ admin_id, text, user_id }: CreateMessage) {
    const message = await this.repository.create({ admin_id, text, user_id })
    await this.repository.save(message)
    return message
  }

  async listByUserId(user_id: string) {
    const messages = await this.repository.find({
      where: { user_id },
      relations: ['user']
    })
    return messages
  }
}

export { MessagesServices }