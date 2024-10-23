import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faTwitter, faInstagram  } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';


function Contact() {

  return (
    <>

      <section className='' style={{backgroundColor:'#B3D9F2'}}>
        <div className="py-5">
          <h1 className="text-center text-dark mt-5 mb-2"><strong>Contact Us</strong></h1>
          <div className="container py-1 col-12 col-lg-6">
            <div class="mb-1">
            <label className="form-label">Name</label>
          <input type="text" className="form-control mb-1" placeholder="Enter Your Name" />
        </div>
        <div className="mb-1">
          <label className="form-label">Mobile Number</label>
          <input type="text" className="form-control mb-1" placeholder="Enter Mobile Number" />
        </div>
        <div className="mb-1">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control mb-5" placeholder="name@example.com" />
      
            </div>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="5">Feedback</textarea>
          </div>
        </div>
      </section>
      


      <div className="container-fluid bg-dark d-flex justify-content-center align-items-center" style={{ height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

{/* <button className="btn btn-hover d-flex justify-content-center align-items-center" style={{width:"130px", height:"50px", textAlign:"center",marginBottom:"25px"}}>
  <a href="http://localhost:3000/About"><strong>About Me</strong></a>
</button>
 */}

<NavLink to="/"><button className='btn btn-primary mb-3'>Back to Home</button></NavLink>


<footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  {/* Other footer content */}

  <a href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook} style={{ fontSize: '25px', marginRight: '10px', backgroundColor:'#1877F2', borderRadius:'5px', marginTop:'10px'}} /></a>
  <a href="https://web.whatsapp.com/" target="_blank"><FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '25px' , marginRight: '10px', backgroundColor:'#25D366', borderRadius:'5px',marginTop:'10px'}} /></a>
  <a href="https://twitter.com/" target="_blank"><FontAwesomeIcon icon={faTwitter} style={{ fontSize: '25px' , marginRight: '10px', backgroundColor:'#1DA1F2', borderRadius:'5px',marginTop:'10px'}}/></a>
  <a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} style={{   fontSize: '25px', marginRight: '10px', background: 'linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045)', borderRadius: '5px',marginTop:'10px'}}/></a>
  


  
</footer>

<p className='text-light mt-3'>All rights are reserved by the owner</p>
</div>


    </>
  );
}

export default Contact;
