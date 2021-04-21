import { Repository, EntityRepository } from 'typeorm'
import { Message } from '../models'

@EntityRepository(Message)
class MessagesRepository extends Repository<Message>{

}

export { MessagesRepository }