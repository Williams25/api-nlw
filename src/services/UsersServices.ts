import { getCustomRepository, Repository } from 'typeorm'
import { User } from '../models'
import { UsersRepositoty } from '../repositories'

interface CreateUser {
  email: string
}

class UsersServices {

  private repository: Repository<User>

  constructor() {
    this.repository = getCustomRepository(UsersRepositoty)
  }

  async create({ email }: CreateUser) {
    const userAlreadyExists = await this.repository.findOne({ email })

    if (userAlreadyExists) return userAlreadyExists

    const user = await this.repository.create({ email })
    return await this.repository.save(user)
  }

  async findById(id: string) {
    return await this.repository.findOne(id)
  }

  async findByEmail(email: string) {
    return await this.repository.findOne({ email })
  }
}

export { UsersServices }