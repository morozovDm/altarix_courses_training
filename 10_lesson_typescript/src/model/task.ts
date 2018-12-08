import mongoose from 'mongoose'

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

const Task = mongoose.model('Tasks', TaskSchema);
export default Task;