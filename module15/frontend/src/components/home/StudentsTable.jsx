import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { formatDate } from '../../utls';

const StudentTable = ({ students }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">No</th>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Gender</th>
            <th scope="col" className="px-6 py-3">Date of Birth</th>
            <th scope="col" className="px-6 py-3">Nationality</th>
            <th scope="col" className="px-6 py-3">Email</th>
            <th scope="col" className="px-6 py-3">Phone</th>
            <th scope="col" className="px-6 py-3">Address</th>
            <th scope="col" className="px-6 py-3">Date of Admission</th>
            <th scope="col" className="px-6 py-3">Course</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item, index) => (
            <tr key={item._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <td className="px-6 py-4 capitalize">{index + 1}</td>
              <td className="px-6 py-4 capitalize">{item.firstName} {item.lastName}</td>
              <td className="px-6 py-4 capitalize">{item.gender}</td>
              <td className="px-6 py-4 capitalize">{formatDate(item.dateOfBirth)}</td>
              <td className="px-6 py-4 capitalize">{item.nationality}</td>
              <td className="px-6 py-4 capitalize">{item.email}</td>
              <td className="px-6 py-4 capitalize">{item.phone}</td>
              <td className="px-6 py-4 capitalize">{item.address}</td>
              <td className="px-6 py-4 capitalize">{formatDate(item.admissionDate)}</td>
              <td className="px-6 py-4 capitalize">{item.course}</td>
              <td className='px-6 py-4 capitalize'>
                <div className='flex justify-center gap-x-4'>
                  <Link to={`/student/edit/${item._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-600' />
                  </Link>
                  <Link to={`/student/delete/${item._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-600' />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
