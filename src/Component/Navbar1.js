import React from 'react'
import { NavLink } from 'react-router-dom';


function Navbar (){
  return (
    <div>
    <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary position-fixed w-100">
  <div className="container-fluid">
    
            <NavLink to="/">
            <img src="../Images/Dev.png" alt="" style={{ width:"80px", marginRight:'20px'}}/>
           </NavLink>
    
    {/* <NavLink to="/"><img src="../Images/Dev.png" alt="" /></NavLink> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end">
        <NavLink to="/" activeClassName="active-styles">
        <li class="nav-item nav-link">Home</li>
        </NavLink>
        <NavLink to="/About" activeClassName="active-styles">
        <li className="nav-item nav-link">About</li>
        </NavLink>
        <NavLink to="/Services" activeClassName="active-styles">
        <li className="nav-item nav-link">Services</li>
        </NavLink>
        <NavLink to="/Contact" activeClassName="active-styles">
        <li className="nav-item nav-link">Contact</li>
        </NavLink>
        
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
