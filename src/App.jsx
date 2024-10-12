import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Menu from './components/Menu.jsx';
import Work from './components/Work.jsx';
import Preloader from './components/Loading.jsx'
import './App.css'

function App() {

  return (
    <Router>
      <Preloader />
      <Menu />
      <div className="app-container">
        <div className="nav-container">
          <Navbar />
        </div>

        <div className="home-work-container">
          <Work />
        </div>

        <div className='about-container'>
          <div className='fixed-about-container'>
            <med-text>
              Design, Front-End, UI/UX
              <br></br> <br></br>
              Computer Science, <br></br> Cognitive Science, <br></br> and Visual Arts <br></br> @ Johns Hopkins University
            </med-text>
          </div>
        </div>


      </div>
    </Router>


  )
}

export default App
