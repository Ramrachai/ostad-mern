const express = require('express');
const router = express.Router();
const studentsController = require('../Controllers/studentController');

router.post('/register', studentsController.createStudent);
router.post('/login', studentsController.loginStudent);
router.get('/', studentsController.getStudents);
router.get('/:id', studentsController.getStudentById);
router.put('/:id', studentsController.updateStudent);
router.delete('/:id', studentsController.deleteStudent);

module.exports = router;
