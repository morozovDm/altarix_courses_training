const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name:{
    type: String,
    unique: true, 
    required: true
  },
  status:{
    type: String,
    unique: true, 
    required: true
  },
},{collection: "Tasks"})

var Task = mongoose.model('Tasks', TaskSchema);
module.exports = Task;