import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  username:{
    type: String,
    unique: true, 
    required: true
  },
  password: {
    type: String,
    required: true
  }
},{collection: "Users"})

let User = mongoose.model('Users', UserSchema);
export default User;