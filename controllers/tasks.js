import { Task } from '../models/task.js'
// importing model info from our database

// inside the index controller, use the Task model to request/query for ALL tasks within the database
function index(req, res) {
  Task.find({})
  .then(tasks => { // tasks represents the result of the query, in this case ALL tasks
    res.render('tasks/index', {
      tasks: tasks,
      time: req.time
    })
  })
  .catch(error => { 
    console.log(error)
    res.redirect('/')
  })
}

// this controller function shows the view page to create a new task

function newTask (req, res) {
  res.render('tasks/new')
}

// this controller function actually creates the new task
// the function below using mongoose method model.create or task.create allows the user to create & post the new task
// task.create is creating the task
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

// this controller function handles the viewing of an individual task
function show(req, res) {
  Task.findById(req.params.id)
  .then(task => {
    res.render('tasks/show', {
      task : task
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/tasks')
  })
}
export { 
  index,
  newTask as new,
  create,
  show
}