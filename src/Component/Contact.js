import React from 'react';
import GoogleForm from './GoogleForm';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faWhatsapp, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { NavLink } from 'react-router-dom';


function ContactForm() {

  return (
    <>

      
<div className="container-fluid">
  <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
    <div className="col-12 col-lg-6">
      <div className="text-center" style={{ marginTop: '80px' }}>
        <GoogleForm />
      </div>
    </div>
  </div>
</div>
      





      <section>
        <div className="container-fluid bg-dark d-flex justify-content-center align-items-center" style={{ height: '35vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

          {/* <button className="btn btn-hover d-flex justify-content-center align-items-center" style={{width:"130px", height:"50px", textAlign:"center",marginBottom:"25px"}}>
  <a href="http://localhost:3000/About"><strong>About Me</strong></a>
</button>
 */}
{/* 
          <NavLink to="/"><button className='btn btn-primary mb-3 mt-3'>BACK TO HOME</button></NavLink>


          <footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            

            <a href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook} style={{ fontSize: '25px', marginRight: '10px', backgroundColor: '#1877F2', borderRadius: '5px', marginTop: '10px' }} /></a>
            <a href="https://web.whatsapp.com/" target="_blank"><FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '25px', marginRight: '10px', backgroundColor: '#25D366', borderRadius: '5px', marginTop: '10px' }} /></a>
            <a href="https://twitter.com/" target="_blank"><FontAwesomeIcon icon={faTwitter} style={{ fontSize: '25px', marginRight: '10px', backgroundColor: '#1DA1F2', borderRadius: '5px', marginTop: '10px' }} /></a>
            <a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} style={{ fontSize: '25px', marginRight: '10px', background: 'linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045)', borderRadius: '5px', marginTop: '10px' }} /></a>




          </footer> */}

          <p className='text-light mt-3'>All rights are reserved by the owner</p>
        </div>

      </section>


    </>
  );
};

export default ContactForm;
