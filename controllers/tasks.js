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
    console.log(tasks)
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

// this controller function handles deleting an individual task
function deleteTask (req, res) {
  Task.findById(req.params.id)
  .then(task => {
    task.delete()
    .then(() => {
      res.redirect('/tasks')
    })
  })
}

function edit (req, res) {
  Task.findById(req.params.id)
  .then(task => {
    res.render('tasks/edit', {
      task : task
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/tasks')
  })
}

function update(req, res) {
  Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(task => {
    res.redirect(`/tasks/${task._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}


export { 
  index,
  newTask as new,
  create,
  show, 
  deleteTask as delete,
  edit, 
  update
}