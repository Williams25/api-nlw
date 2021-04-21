import { Router } from 'express'
import { MessagesController } from '../controllers'

const router = Router()
const messagesController = new MessagesController()

router.get('/:user_id', messagesController.listByUserId)
router.post('/', messagesController.create)

export default router