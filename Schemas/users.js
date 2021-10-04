const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  phone_number: {
    type: String,
    maxlength: 50
  }
})

const users = mongoose.model('users', userSchema)

module.exports = users;
