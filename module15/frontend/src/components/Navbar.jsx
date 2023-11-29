import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-slate-900 py-2 flex justify-center gap-4'>
        <Link to={"/"} className='text-gray-800 hover:text-purple-700 bg-purple-100 p-2 rounded'>Students List</Link>
        <Link to={"/student/create"} className='text-gray-800 hover:text-purple-700 bg-purple-100 p-2 rounded'>Add Student</Link>
    </div>
  )
}

export default Navbar; 