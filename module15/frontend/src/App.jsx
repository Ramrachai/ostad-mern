import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateStudent from './pages/Create';
import ShowStudent from './pages/Show';
import EditStudent from './pages/Edit';
import DeleteStudent from './pages/Delete';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='m-auto mt-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/student/create' element={<CreateStudent />} />
          <Route path='/student/details/:id' element={<ShowStudent />} />
          <Route path='/student/edit/:id' element={<EditStudent />} />
          <Route path='/student/delete/:id' element={<DeleteStudent />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
