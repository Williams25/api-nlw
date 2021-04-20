import { Router, Request, Response } from 'express'
import { SettingsControlller } from '../controllers'

const router = Router()
const settingsControlller = new SettingsControlller()

router.get('/', settingsControlller.find)
router.post('/', settingsControlller.create)

export default router