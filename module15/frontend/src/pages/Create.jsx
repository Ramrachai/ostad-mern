import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { API_URL } from '../config';

const CreateStudents = () => {

  

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdataObj = new FormData(e.currentTarget);
    const data = Object.fromEntries(formdataObj.entries())

    console.log("data===>", data);

    setLoading(true);
    axios
      .post(API_URL + "/students", data)
      .then(() => {
        setLoading(false);
        navigate('/');
        enqueueSnackbar('Student Registered successfully', { variant: 'success' });
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
      <h1 className='text-3xl my-4'>Add new Student</h1>
      {loading ? <Spinner /> : ''}

      <form onSubmit={handleSubmit} className=' w-full max-w-[600px] flex flex-col gap-2 border-2 border-gray-200 rounded-xl p-4 mx-auto'>
        <div>
          <label className='text-sm mr-4 text-gray-500'>First Name</label>
          <input 
            name="firstName"
            type='text'
            className='border border-gray-200 rounded px-2 py-1 w-full'
          />
        </div>
        <div>
          <label className='text-sm mr-4 text-gray-500'>Last Name</label>
          <input 
            name="lastName"
            type='text'
            className='border border-gray-200 rounded px-2 py-1 w-full'
          />
        </div>
        <div>
          <label className='text-sm mr-4 text-gray-500'>Gender</label>
          <select name="gender" id="gender" 
            className='border border-gray-200 rounded px-2 py-1 w-full'
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label className='text-sm mr-4 text-gray-500'>Date of Birth</label>
          <input 
            name="dateOfBirth"
            type='date'
            className='border border-gray-200 rounded px-2 py-1 w-full'
          />
        </div>

        <div>
          <label className='text-sm mr-4 text-gray-500'>Nationality</label>
          <input 
            name="nationality"
            type='text'
            className='border border-gray-200 rounded px-2 py-1 w-full'
          />
        </div>

        <div>
          <label className='text-sm mr-4 text-gray-500'>Address</label>
          <input 
            name="address"
            type='text'
            className='border border-gray-200 rounded px-2 py-1 w-full'
          />
        </div>


        <div>
          <label className='text-sm mr-4 text-gray-500'>Email</label>
          <input 
            name="email"
            type='email'
            className='border border-gray-200 rounded px-2 py-1 w-full'
          />
        </div>
        <div>
          <label className='text-sm mr-4 text-gray-500'>Phone</label>
          <input 
            name="phone"
            type='text'
            className='border border-gray-200 rounded px-2 py-1 w-full'
          />
        </div>
        <div>
          <label className='text-sm mr-4 text-gray-500'>Admission Date</label>
          <input 
            name="admissionDate"
            type='date'
            className='border border-gray-200 rounded px-2 py-1 w-full'
          />
        </div>

        <div>
          <label className='text-sm mr-4 text-gray-500'>Course</label>
          <select name="course" id="course" 
            className='border border-gray-200 rounded px-2 py-1 w-full'
          >
            <option value="seo">SEO</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
            <option value="UI / UX">UI/UX</option>
            <option value="datascience">Data Science</option>
          </select>
        </div>
        <button type='submit' className='p-2 bg-sky-300 mt-4 rounded'>Register</button>
      </form>
    </div>
  );
}

export default CreateStudents