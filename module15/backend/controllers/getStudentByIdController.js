import { Student } from "../models/studentModel.js";

const getStudentByIdController = async (request, response) => {
    try {
        const { id } = request.params;
        const student = await Student.findById(id);
        return response.status(200).json(student);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}

export default getStudentByIdController;