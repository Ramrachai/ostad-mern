import express from 'express';
import studentsListController from '../controllers/studentsListController.js';
import getStudentByIdController from '../controllers/getStudentByIdController.js';
import updateStudentByIdController from '../controllers/updateStudentByIdController.js';
import deleteStudentByIdController from '../controllers/deleteStudentByIdController.js';
import addStudentController from '../controllers/addStudentController.js';

const router = express.Router();

router.post('/', addStudentController);
router.get('/', studentsListController);
router.get('/:id', getStudentByIdController);
router.put('/:id', updateStudentByIdController);
router.delete('/:id', deleteStudentByIdController);


export default router;
