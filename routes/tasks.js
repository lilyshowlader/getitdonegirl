import { Router } from 'express'
import * as tasksCtrl from '../controllers/tasks.js'
const router = Router()

// GET localhost:3000/users
router.get('/', tasksCtrl.index)

export { router }
