import { getCustomRepository, Repository } from 'typeorm'
import { Connection } from '../models'
import { ConnectionsRepository } from '../repositories'

interface CreateConnection {
  admin_id?: string
  socket_id: string
  user_id: string
  id?: string
}

class ConnectionsServices {
  private repository: Repository<Connection>

  constructor() {
    this.repository = getCustomRepository(ConnectionsRepository)
  }

  async create({ admin_id, socket_id, user_id, id }: CreateConnection) {
    const connection = await this.repository.create({ admin_id, socket_id, user_id, id })
    await this.repository.save(connection)
    return connection
  }

  async findByUserId(user_id: string) {
    return await this.repository.findOne({ user_id })
  }
}

export { ConnectionsServices }