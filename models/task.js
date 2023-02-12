// models are ALWAYS singular. notice how it says task.js and not tasks.js
// the first thing we do in our model is import

import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

// Schema is a class. We are passing an object to our Schema class below
const taskSchema = new Schema({
  text: String,
  done: Boolean,
})
// the schema defines the shape of our data. we don't need to include the _id because it is automatically associated with it.

// Compile the schema into a model and export it
const Task = mongoose.model('Task', taskSchema)

export {
  Task
}
