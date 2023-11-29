import { Student } from "../models/studentModel.js";

const addStudentController = async (request, response) => {
    try {
      if (
        !request.body.firstName ||
        !request.body.phone ||
        !request.body.email
      ) {
        return response.status(400).send({
          message: 'Send all required fields: Name, Email, Phone',
        });
      }
      const student = await Student.create(request.body);
      return response.status(201).send(student);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  }

  export default addStudentController;