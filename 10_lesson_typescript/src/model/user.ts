import {Schema, model, Document} from 'mongoose'

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, { collection: "Users" })

export interface IUser extends Document {
  _id: number;
  username: string;
  password: string;
}

export const UserModel = model('Users', UserSchema);
