const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  gender: String, 
  phone: String,  
  age: Number,    
  email: String,  
  password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
