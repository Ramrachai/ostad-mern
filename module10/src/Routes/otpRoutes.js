const express = require('express');
const router = express.Router();
const otpController = require('../Controllers/otpController');

router.post('/', otpController.createOTP);
router.get('/', otpController.getOTPs);
router.get('/:id', otpController.getOTPById);
router.put('/:id', otpController.updateOTP);
router.delete('/:id', otpController.deleteOTP);

module.exports = router;
