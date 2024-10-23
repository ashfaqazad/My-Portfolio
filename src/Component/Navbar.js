import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

// lg:flex lg:flex-grow lg:items-center lg:w-auto hidden absolute lg:relative lg:bg-transparent

  return (
    <nav className="sticky top-0 z-50 bg-light opacity-0.1">
      <div className="container mx-auto flex items-center justify-between py-4 opacity-0.1">
        
        <NavLink to="/">
          <img src="../Images/Dev.png" alt="" className="w-20" />
        </NavLink>

        <button
          className="lg:hidden px-3 py-2 text-black"
          onClick={handleNavbarToggle}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Conditional rendering based on isNavbarOpen state */}
        <div className={`lg:flex lg:flex-grow lg:items-center lg:w-auto ${isNavbarOpen ? 'block' : 'hidden'} lg:relative lg:bg-transparent`}>



        <ul className="lg:flex lg:justify-end">
  <li>
    <NavLink
      to="/"
      activeClassName="text-yellow-300"
      className="block py-2 px-4 text-black"
      style={{ color: 'black', textDecoration: 'none' }}
      onMouseOver={(e) => e.target.style.color = 'red'}
      onMouseOut={(e) => e.target.style.color = 'black'}
      onClick={closeNavbar}
    >
      Home
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/About"
      activeClassName="text-yellow-300"
      className="block py-2 px-4 text-black"
      style={{ color: 'black', textDecoration: 'none' }}
      onMouseOver={(e) => e.target.style.color = 'red'}
      onMouseOut={(e) => e.target.style.color = 'black'}
      onClick={closeNavbar}
    >
      About
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/Services"
      activeClassName="text-yellow-300"
      className="block py-2 px-4 text-black"
      style={{ color: 'black', textDecoration: 'none' }}
      onMouseOver={(e) => e.target.style.color = 'red'}
      onMouseOut={(e) => e.target.style.color = 'black'}
      onClick={closeNavbar}
    >
      Services
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/Contact"
      activeClassName="text-yellow-300"
      className="block py-2 px-4 text-black"
      style={{ color: 'black', textDecoration: 'none' }}
      onMouseOver={(e) => e.target.style.color = 'red'}
      onMouseOut={(e) => e.target.style.color = 'black'}
      onClick={closeNavbar}
    >
      Contact
    </NavLink>
  </li>
</ul>




        </div>
      </div>
    </nav>
  );
}

export default Navbar;
