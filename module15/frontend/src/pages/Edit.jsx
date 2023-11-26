import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { API_URL } from '../config';
import { formatDate } from '../utls';

const EditStudent = () => {

  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    nationality: '',
    address: '',
    email: '',
    phone: '',
    admissionDate: '',
    courses: []
  });


  
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`${API_URL}/${id}`)
      .then((response) => {
        setLoading(false);
        const { data } = response;
        setStudent(data);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check console');
        console.log(error);
      });
  }, [])
  
  const handleEditStudent = (e) => {
    e.preventDefault();
    const data = new FormData(student);
    console.log(data)

    setLoading(true);
    axios
      .put(`${API_URL}/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Student Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Update Student</h1>
      {loading ? <Spinner /> : ''}
      
      <form onSubmit={handleEditStudent} className='flex flex-col gap-2 border-2 border-gray-200 rounded-xl w-[600px] p-4 mx-auto'>
        <div>
          <label className='text-sm mr-4 text-gray-500'>First Name</label>
          <input
            type='text'
            value={student.firstName}
            onChange={(e) => setStudent({ ...student, firstName: e.target.value })}
            className='border border-gray-200 rounded px-2 py-1 w-full'
          />
        </div>
        <div>
          <label className='text-sm mr-4 text-gray-500'>Last Name</label>
          <input
            type='text'
            value={student.lastName}
            onChange={(e) => setStudent({ ...student, lastName: e.target.value })}
            className='border border-gray-200 rounded px-2 py-1 w-full'
          />
        </div>
        <div>
          <label className='text-sm mr-4 text-gray-500'>Gender</label>
          <input
            type='text'
            value={student.gender}
            onChange={(e) => setStudent({ ...student, gender: e.target.value })}
            className='border border-gray-200 rounded px-2 py-1 w-full'
          />
        </div>
        <div>
          <label className='text-sm mr-4 text-gray-500'>Date of Birth</label>
          <input
            type='date'
            value={formatDate(student.dateOfBirth)}
            onChange={(e) => setStudent({ ...student, dateOfBirth: e.target.value })}
            className='border border-gray-200 rounded px-2 py-1 w-full'
          />
        </div>
        <div>
          <label className='text-sm mr-4 text-gray-500'>Email</label>
          <input
            type='text'
            value={student.email}
            onChange={(e) => setStudent({ ...student, email: e.target.value })}
            className='border border-gray-200 rounded px-2 py-1 w-full'
          />
        </div>
        <div>
          <label className='text-sm mr-4 text-gray-500'>Phone</label>
          <input
            type='text'
            value={student.phone}
            onChange={(e) => setStudent({ ...student, phone: e.target.value })}
            className='border border-gray-200 rounded px-2 py-1 w-full'
          />
        </div>
        <div>
          <label className='text-sm mr-4 text-gray-500'>Admission Date</label>
          <input
            type='date'
            value={formatDate(student.admissionDate)}
            onChange={(e) => setStudent({ ...student, admissionDate: e.target.value })}
            className='border border-gray-200 rounded px-2 py-1 w-full'
          />
        </div>

        <button className='p-2 bg-sky-300 mt-4 rounded' onClick={handleEditStudent}>
          Save
        </button>
      </form>
    </div>
  )
}

export default EditStudent