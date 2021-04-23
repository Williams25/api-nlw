import { Router } from 'express'
import { SettingsController } from '../controllers'

const router = Router()
const settingsController = new SettingsController()

router.get('/', settingsController.find)
router.get('/admin/:userName', settingsController.findByUserName)
router.put('/admin/:userName', settingsController.update)
router.post('/', settingsController.create)

export default router