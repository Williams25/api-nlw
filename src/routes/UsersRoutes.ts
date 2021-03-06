import { Router } from 'express'
import { UsersController } from '../controllers'

const router = Router()
const usersController = new UsersController()

router.get('/:user_id', usersController.find)
router.post('/', usersController.create)

export default router