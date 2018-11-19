const mongoose = require('mongoose')

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

var User = mongoose.model('Users', UserSchema);
module.exports = User;