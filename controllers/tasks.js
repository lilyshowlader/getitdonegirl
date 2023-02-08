import { tasks } from '../data/tasks-data.js'


// this controller function displays all of the tasks (the index view)
function index (req, res) {
  res.render('tasks/index', {
    tasks: tasks
  })
}


export { 
  index 
}