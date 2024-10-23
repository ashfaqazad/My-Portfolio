import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faTwitter, faInstagram  } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';


function Footer() {
  return (
    <>
    
<div className="container-fluid bg-dark d-flex justify-content-center align-items-center" style={{ height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

  {/* <button className="btn btn-hover d-flex justify-content-center align-items-center" style={{width:"130px", height:"50px", textAlign:"center",marginBottom:"25px"}}>
    <a href="http://localhost:3000/About"><strong>About Me</strong></a>
  </button>
   */}

<NavLink to="/about"><button className='btn btn-primary mb-5'>About Me</button></NavLink>


  <footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    {/* Other footer content */}

    <a href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook} style={{ fontSize: '25px', marginRight: '10px'}} /></a>
    <a href="https://web.whatsapp.com/" target="_blank"><FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '25px' , marginRight: '10px' }} /></a>
    <a href="https://twitter.com/" target="_blank"><FontAwesomeIcon icon={faTwitter} style={{ fontSize: '25px' , marginRight: '10px' }}/></a>
    <a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} style={{ fontSize: '25px' , marginRight: '10px' }}/></a>
    


    
  </footer>

  <p className='text-white mt-3'>All rights are reserved by the owner</p>
</div>

    </>
  );
}

export default Footer;



