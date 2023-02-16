import { Router } from 'express'
import * as tasksCtrl from '../controllers/tasks.js'
const router = Router()

// GET localhost:3000/tasks (view page for all tasks)
router.get('/', tasksCtrl.index)
// GET localhost:3000/tasks/new (view page to add new task)
router.get('/new',tasksCtrl.new)
// GET localhost:3000/tasks/:id/edit (view page to edit a task)
router.get('/:id/edit', tasksCtrl.edit)
// POST localhost:3000/tasks (new task will be created and added here)
router.post('/', tasksCtrl.create)
// GET localhost:3000/tasks/:id (show individual task details)
router.get('/:id', tasksCtrl.show)
// DELETE localhost:3000/tasks/:id (to delete individual task)
router.delete('/:id', tasksCtrl.delete)
// PUT localhost:3000/tasks/:id (updates the task)
router.put('/:id', tasksCtrl.update)


export { router }
