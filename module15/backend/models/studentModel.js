import mongoose from 'mongoose';

const studentSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,  // Change type to Date
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    admissionDate: {
      type: Date,  // Change type to Date
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Student = mongoose.model('Student', studentSchema);
