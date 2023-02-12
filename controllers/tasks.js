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
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}
// above [{}] -> stands for find ALL documents. if you pass something into the object, it acts like a filter. since there is nothing in there, nothing is being filtered



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


export { 
  index,
  newTask as new,
  create
}