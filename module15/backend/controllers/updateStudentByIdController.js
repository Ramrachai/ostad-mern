import { Student } from "../models/studentModel.js";

const updateStudentByIdController = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Student.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({ message: 'Student not found' });
        }
        return response.status(200).send({ message: 'Student updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}

export default updateStudentByIdController;