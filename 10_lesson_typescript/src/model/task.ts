import { Document, Schema, model } from 'mongoose';

const TaskSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  status: {
    type: String,
    unique: true,
    required: true
  },
}, { collection: "Tasks" });

export interface ITask extends Document {
  name: string;
  status: string;
}
export const TaskModel = model<ITask>('Tasks', TaskSchema);