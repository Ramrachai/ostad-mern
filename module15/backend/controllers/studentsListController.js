import { Student } from "../models/studentModel.js";


const studentsListController = async (request, response) => {
    try {
        const students = await Student.find({});
        return response.status(200).json({
            count: students.length,
            data: students,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}

export default studentsListController;