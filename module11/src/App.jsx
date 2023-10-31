import './App.css'
import React from 'react';
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Service from "./components/Service"
import Project from "./components/Project"
import Footer from "./components/Footer"

function App() {

  return (
    <div className='app-wrapper'>
      <Header />
      <Hero />
      <About />
      <Service />
      <Project />
      <Footer />
    </div>
  )
}

export default App
