const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: String,
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
