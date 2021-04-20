import { Repository, EntityRepository } from 'typeorm'
import { Setting } from '../models'

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {

}

export { SettingsRepository }