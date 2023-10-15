const express = require('express');
const router = express.Router();
const worksController = require('../Controllers/worksController');
const authVerify = require('../Middleware/authVerify');

router.post('/', authVerify, worksController.createWork);
router.get('/', worksController.getWorks);
router.get('/:id', worksController.getWorkById);
router.put('/:id', worksController.updateWork);
router.delete('/:id', worksController.deleteWork);

module.exports = router;
