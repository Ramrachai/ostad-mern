import { Student } from "../models/studentModel.js";

const deleteStudentByIdController = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Student.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: 'Student not found' });
        }
        return response.status(200).send({ message: 'Student deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}
export default deleteStudentByIdController;