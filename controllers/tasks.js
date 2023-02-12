import { Task } from '../models/task.js'


// this controller function displays all of the tasks (the index view)
function index(req, res) {
  Task.find({})
  .then(tasks => { // tasks represents the result of the query, in this case ALL tasks
    res.render('tasks/index', {
      tasks: tasks,
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}

// this controller function shows the view page to create a new task

function newTask (req, res) {
  res.render('tasks/new')
}

// this controller function actually creates the new task

function create (req, res) {
   console.log(req.body)
  Task.create(req.body)
  .then(task => {
    res.redirect('/tasks')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/tasks')
  })
}


export { 
  index,
  newTask as new,
  create
}