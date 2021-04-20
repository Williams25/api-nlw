import { Router } from 'express'
import settings from './SettingsRoutes'

const router = Router()

router.use('/settings', settings)

export default router