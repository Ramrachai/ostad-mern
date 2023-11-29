import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import StudentsTable from '../components/home/StudentsTable';
import { API_URL } from '../config';

const Home = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/students`)
      .then((response) => {
        setStudents(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        // console.log(error);
        setLoading(false);
      });
  }, []);



  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Students List</h1>
        <Link to='/student/create'>
          Add <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (<Spinner />) : (<StudentsTable students={students} />)}
    </div>
  );
};

export default Home;
