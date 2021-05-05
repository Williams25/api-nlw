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
    const user = await this.repository.findOne({ user_id })
    return user
  }

  async findAllWithoutAdmin() {
    const connection = await this.repository.find({
      where: {
        admin_id: null
      },
      relations: ['user']
    })
    return connection
  }

  async findBySocketId(socketId: string) {
    const connection = await this.repository.findOne({ where: { socket_id: socketId } })
    return connection
  }

  async update(userId: string, adminId: string) {
    return await this.repository.update({ user_id: userId }, { admin_id: adminId })
  }
}

export { ConnectionsServices }