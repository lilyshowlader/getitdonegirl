import { tasks } from '../data/tasks-data.js'


// this controller function displays all of the tasks (the index view)
function index (req, res) {
  res.render('tasks/index', {
    tasks: tasks
  })
}

// this controller function is the first part to creating a new task

function newTask (req, res) {
  res.render('tasks/new')
}


export { 
  index,
  newTask as new
}