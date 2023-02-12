import { Router } from 'express'
import * as tasksCtrl from '../controllers/tasks.js'
const router = Router()

// GET localhost:3000/tasks
router.get('/', tasksCtrl.index)
// GET localhost:3000/tasks/new (adding a new task)
router.get('/new',tasksCtrl.new)

export { router }
