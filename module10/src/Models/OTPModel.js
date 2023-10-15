const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  email: String,
  otp: String,
  status: Number,
});

const OTPModel = mongoose.model('OTP', otpSchema);

module.exports = OTPModel;
