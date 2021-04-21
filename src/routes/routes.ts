import { Router } from 'express'
import { settingRoutes, userRoutes, messageRoutes } from '../routes'

const router = Router()

router.use('/settings', settingRoutes)
router.use('/users', userRoutes)
router.use('/messages', messageRoutes)

export { router }