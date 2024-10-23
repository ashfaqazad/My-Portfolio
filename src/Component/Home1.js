import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faTwitter, faInstagram  } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';



function Home() {

  return (
    <>

      <header className='header-style d-flex flex-column justify-content-center text-light' style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url('../Images/laptop6.jpg')`,

      }}>

        <div className="container">
          <div className='col-12 text-center'>
            <h1>
              <strong>Web Development Journey!</strong>
            </h1>
            <p className='py-4 px-5 text-light' style={{textAlign:'justify'}}>As a web developer, I embark on a journey where I accompany you, presenting my services along the way. Join me in this digital adventure, where I bring expertise to enhance your online presence. Together, let's explore the possibilities and create a web experience that truly stands out. Welcome to a collaboration of innovation and creativity!</p>
            
          </div>
        </div>
      </header>



      <section className='bg-light' id='about'>
        <div className="container">
          <div className="row py-5">
            <div className='d-block d-lg-flex justify-content-around'>
              <div className='about-content col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center' style={{marginRight:'40px'}}>
                <h2 className='mb-4 mb-md-5 fs-1'>
                  <strong>About Me</strong>
                </h2>

                <p>Hello, I'm Ashfaque Ahmed, and I specialize in making websites look great! I've spent quite some time working with HTML5, CSS3, JavaScript, React JS, and Bootstrap these are like the building blocks for the visual part of websites. WordPress is another area where I'm quite skilled, especially in creating beautiful designs.

                  One thing I really enjoy is learning about new technologies and trying them out. It's like solving puzzles for me each technology is a new piece to explore and experiment with. When it comes to building websites, I've used HTML5, CSS3, JavaScript, React JS, and Bootstrap in different projects, making each one unique. I've also put my skills to work in WordPress, using it as a canvas to paint attractive and functional designs.

                  Keeping up with the latest trends in the web development industry is something that really grabs my attention. It's like watching a movie you never know what exciting things are going to happen next. I'm always on the lookout for new technologies to play around with, to see how they can make websites even better <span><a href="http://localhost:3000/About" style={{color:'blue'}}>Read More</a></span>

                </p>
                  

              </div>
              <div className='col-12 col-lg-6 d-flex align-items-center justify-content-center py-5'>
                <img src="../Images/laptop4.jpg" className='img-fluid shadow' alt="" />
              </div>

            </div>

          </div>
        </div>
      </section>




      <section className='container' id='service'>
        <div className="row g-4 py-5">
          <h2 className='text-center mb-4 mb-md-5'>
            <strong>Services</strong>
          </h2>


          <div className="col-md-4">
            <div className="card shadow" style={{ backgroundColor: "#001f3f" }}>
              <h5 className='card-title text-center text-light mt-5'>
                <strong>Foundations</strong>
              </h5>
              <p className='card-text text-center py-4 text-light px-1'>Crafting solid foundations with HTML, CSS, and Bootstrap to create visually appealing and responsive web designs for a seamless user experience.</p>
              <div className='d-flex justify-content-center'>
                <a href="http://localhost:3000/Services" className='btn shadow text-light bg-primary'>View More</a>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div className="card shadow" style={{ backgroundColor: '#dcdcdc' }}>
              <h5 className='card-title text-center mt-5'>
                <strong>Interactivity</strong>
              </h5>
              <p className='card-text text-center py-4 px-1'>Elevate user engagement using JavaScript and React JS, delivering dynamic and interactive web solutions that captivate and enhance the user experience.</p>
              <div className='d-flex justify-content-center'>
                <a href="http://localhost:3000/Services" className='btn shadow bg-dark text-light'>View More</a>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div className="card bg-primary shadow">
              <h5 className='card-title text-center text-light mt-5'>
                <strong>Content Management:</strong>
              </h5>
              <p className='card-text text-center py-4 text-light px-1'>Simplify content management with WordPress, empowering you to efficiently organize, update, and present your website's content with ease and flexibility.</p>
              <div className='d-flex justify-content-center'>
                <a href="#" className='btn shadow text-light bg-dark'>View More</a>
              </div>
            </div>
          </div>

        </div>


      </section>

    

      <div className="container-fluid bg-dark d-flex justify-content-center align-items-center" style={{ height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

{/* <button className="btn btn-hover d-flex justify-content-center align-items-center" style={{width:"130px", height:"50px", textAlign:"center",marginBottom:"25px"}}>
  <a href="http://localhost:3000/About"><strong>About Me</strong></a>
</button>
 */}

<NavLink to="/About"><button className='btn btn-primary mb-3'>ABOUT</button></NavLink>


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

export default Home;









