import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { formatDate } from '../../utls';

const StudentTable = ({ students }) => {
  return (
    <div className='overflow-x-auto'>
    <table className='min-w-full'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>Name</th>
          <th className='border border-slate-600 rounded-md'>Gender</th>
          <th className='border border-slate-600 rounded-md'>Date of Birth</th>
          <th className='border border-slate-600 rounded-md'>Nationality</th>
          <th className='border border-slate-600 rounded-md'>Email</th>
          <th className='border border-slate-600 rounded-md'>Phone</th>
          <th className='border border-slate-600 rounded-md'>Address</th>
          <th className='border border-slate-600 rounded-md'>Date of Admission</th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {students.map((item, index) => (
          <tr key={item._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>{index + 1}</td>
            <td className='border border-slate-700 rounded-md text-center'>{item.firstName} {item.lastName}</td>
            <td className='border border-slate-700 rounded-md text-center'>{item.gender}</td>
            <td className='border border-slate-700 rounded-md text-center'>{formatDate(item.dateOfBirth)}</td>
            <td className='border border-slate-700 rounded-md text-center'>{item.nationality}</td>
            <td className='border border-slate-700 rounded-md text-center'>{item.email}</td>
            <td className='border border-slate-700 rounded-md text-center'>{item.phone}</td>
            <td className='border border-slate-700 rounded-md text-center'>{item.address}</td>
            <td className='border border-slate-700 rounded-md text-center'>{formatDate(item.admissionDate)}</td>

            <td className='border border-slate-700 rounded-md text-center'>
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
