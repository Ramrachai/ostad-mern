const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  firstName: String,
  lastName: String,
  mobile: String,
  password: String, 
  address: String,
  roll: String,
  class: String,
});

const StudentsModel = mongoose.model('Students', studentSchema);

module.exports = StudentsModel;
