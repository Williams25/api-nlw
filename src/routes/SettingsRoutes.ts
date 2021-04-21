import { Router } from 'express'
import { SettingsController } from '../controllers'

const router = Router()
const settingsController = new SettingsController()

router.get('/', settingsController.find)
router.post('/', settingsController.create)

export default router