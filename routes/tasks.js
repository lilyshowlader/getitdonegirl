import { Router } from 'express'
import * as tasksCtrl from '../controllers/tasks.js'
const router = Router()

// GET localhost:3000/tasks
router.get('/', tasksCtrl.index)
// GET localhost:3000/tasks/new (view page to add new task)
router.get('/new',tasksCtrl.new)
// POST localhost:3000/tasks (new task will be created and added here)
router.post('/', tasksCtrl.create)

export { router }
