import { Repository, EntityRepository } from 'typeorm'
import { User } from '../models'

@EntityRepository(User)
class UsersRepositoty extends Repository<User> {

}

export { UsersRepositoty }