const OTP = require('../Models/OTPModel');

// Create a new OTP
const createOTP = async (req, res) => {
  try {
    const otp = new OTP(req.body);
    await otp.save();
    res.status(201).json({ message: 'OTP created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'OTP creation failed' });
  }
};

// Get all OTPs
const getOTPs = async (req, res) => {
  try {
    const otps = await OTP.find();
    res.json(otps);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch OTPs' });
  }
};

// Get an OTP by ID
const getOTPById = async (req, res) => {
  try {
    const otp = await OTP.findById(req.params.id);
    if (!otp) {
      return res.status(404).json({ message: 'OTP not found' });
    }
    res.json(otp);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch OTP' });
  }
};

// Update an OTP by ID
const updateOTP = async (req, res) => {
  try {
    const updatedOTP = await OTP.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedOTP) {
      return res.status(404).json({ message: 'OTP not found' });
    }
    res.json(updatedOTP);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update OTP' });
  }
};

// Delete an OTP by ID
const deleteOTP = async (req, res) => {
  try {
    const deletedOTP = await OTP.findByIdAndRemove(req.params.id);
    if (!deletedOTP) {
      return res.status(404).json({ message: 'OTP not found' });
    }
    res.json({ message: 'OTP deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete OTP' });
  }
};

module.exports = { createOTP, getOTPs, getOTPById, updateOTP, deleteOTP };
