import { Repository, EntityRepository } from 'typeorm'
import { Connection } from '../models'

@EntityRepository(Connection)
class ConnectionsRepository extends Repository<Connection>{

}

export { ConnectionsRepository }