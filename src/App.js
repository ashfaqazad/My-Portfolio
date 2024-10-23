import React from 'react';
import './Styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Services from './Component/Services';
import SocialIcons from './Component/SocialIcons'; // Import SocialIcons here


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <SocialIcons/>

        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
