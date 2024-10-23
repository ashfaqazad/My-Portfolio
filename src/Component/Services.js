import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faWhatsapp, faTwitter, faInstagram  } from '@fortawesome/free-brands-svg-icons';
// import { NavLink } from 'react-router-dom';



function Services() {

  return (
    <>

      <header className='img2-style d-flex flex-column justify-content-center text-light' style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url('../Images/pc3.webp')`,

      }}>


        <div className="container">
          <div className='col-12 text-center'>
            <h1 className='' style={{fontSize: '3rem', fontFamily:'Georgia, Times New Roman, Times, serif'}}>
              <strong>Our Services</strong>
            </h1>
            <p className='py-4 px-5 text-light' style={{ fontSize: '1.5rem', fontFamily:'cursive' }}>As a web developer, I create dynamic, responsive websites with a user-centric approach.</p>

          </div>
        </div>
      </header>






      <section className='bg-light shadow' id='about'>
        <div className="container">

          <div className='col-12 d-flex justify-content-center align-items-center m-auto py-5'>
            <img src="../Images/imga.jpg" className='img-fluid shadow' style={{ width: '600px', height: '300px' }} alt="" />
          </div>


          <div className="row">
            <div className='d-block d-lg-flex justify-content-center'>




              <div className='about-content col-12 d-flex flex-column justify-content-around'>
                <h2 className='mb-4 mb-md-5 fs-1 text-center'>
                  <strong>Foundation</strong>
                </h2>

                <p style={{ textAlign: 'justify' }}> Crafting solid foundations with HTML, CSS, and Bootstrap to create visually appealing and responsive web designs for a seamless user experience. HTML establishes the structural framework of a website, CSS adds the aesthetic layer, and Bootstrap streamlines the design process with pre-designed components for consistency and responsiveness across devices.

                  Moving into interactivity, JavaScript and React JS play pivotal roles. JavaScript enhances user experience by enabling dynamic content and interactive features, while React JS, a powerful library, takes interactivity to the next level, facilitating the development of efficient single-page applications with a smooth user interface.

                  Transitioning to content management, WordPress stands out as a robust solution. Its intuitive interface and diverse plugin ecosystem simplify the organization, updating, and presentation of digital content. From laying the groundwork with HTML, CSS, and Bootstrap to incorporating interactivity with JavaScript and React JS, and finally, streamlining content management with WordPress, my portfolio reflects a comprehensive approach to web development, aiming to deliver websites that excel in design, functionality, and user experience.
                </p>


              </div>


            </div>

          </div>
        </div>
      </section>





      <section className='bg-light shadow' id='about'>
        <div className="container">

          <div className='col-12 d-flex justify-content-center align-items-center m-auto py-5'>
            <img src="../Images/img6.jpg" className='img-fluid shadow' style={{ width: '600px', height: '300px' }} alt="" />
          </div>


          <div className="row">
            <div className='d-block d-lg-flex justify-content-center'>




              <div className='about-content col-12 d-flex flex-column justify-content-around'>
                <h2 className='mb-4 mb-md-5 fs-1 text-center'>
                  <strong>Interactivity</strong>
                </h2>

                <p style={{ textAlign: 'justify' }}> Elevating user engagement is a core tenet of my web development strategy, achieved through the strategic use of JavaScript and React JS. JavaScript serves as the engine behind dynamic and interactive web content, allowing for real-time updates, form validations, and enhanced user interactions. By harnessing the power of JavaScript, websites become more than static pages, transforming into dynamic platforms that respond to user inputs with agility.

                  Taking interactivity to the next level, React JS, a powerful JavaScript library, becomes the catalyst for creating captivating and immersive user experiences. React JS excels in developing single-page applications, providing a seamless and efficient interface that captivates users from the moment they land on a webpage. Its component-based architecture allows for modular development, enabling easy maintenance and scalability of web solutions.

                  In essence, my approach revolves around delivering dynamic and interactive web solutions that go beyond traditional static designs. By leveraging the capabilities of JavaScript and React JS, I aim to not only capture but sustain user attention, creating an online environment that is both engaging and memorable. This commitment to enhancing the user experience through cutting-edge interactivity defines the essence of my web development portfolio.
                </p>


              </div>


            </div>

          </div>
        </div>
      </section>




      <section className='bg-light shadow' id='about'>
        <div className="container">

          <div className='col-12 d-flex justify-content-center align-items-center m-auto py-5'>
            <img src="../Images/wimg.jpeg" className='img-fluid shadow' style={{ width: '600px', height: '300px' }} alt="" />
          </div>


          <div className="row">
            <div className='d-block d-lg-flex justify-content-center'>




              <div className='about-content col-12 d-flex flex-column justify-content-around'>
                <h2 className='mb-4 mb-md-5 fs-1 text-center'>
                  <strong>Content Management</strong>
                </h2>


                <p style={{ textAlign: 'justify' }}> Simplifying content management lies at the core of my web development philosophy, and WordPress stands out as a powerful tool that empowers users to manage their digital content with ease and flexibility. With its user-friendly interface and intuitive features, WordPress has become synonymous with efficient content organization, updates, and presentation.

                  WordPress allows users to take control of their website's content without the need for extensive technical knowledge. Its straightforward dashboard provides a centralized hub for managing pages, blog posts, and multimedia elements. The platform's robust plugin ecosystem further enhances functionality, offering a myriad of options to tailor the website to specific needs.

                  Efficiency is a key attribute of WordPress, enabling swift updates and edits without compromising the integrity of the site. Whether it's publishing new blog posts, incorporating multimedia content, or adjusting the layout, WordPress simplifies these tasks, ensuring that content management remains a streamlined and user-friendly process.

                  Flexibility is another hallmark of WordPress, accommodating various types of websites, from blogs to e-commerce platforms. Its adaptability makes it an ideal choice for individuals and businesses looking for a versatile content management system that can evolve with their needs.

                  In essence, my commitment to simplifying content management with WordPress underscores the importance of providing clients with a platform that not only facilitates efficient content handling but also offers the flexibility to grow and adapt in the dynamic digital landscape.
                </p>


              </div>


            </div>

          </div>
        </div>
      </section>



      <div className="container-fluid bg-dark d-flex justify-content-center align-items-center" style={{ height: '35vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

{/* <button className="btn btn-hover d-flex justify-content-center align-items-center" style={{width:"130px", height:"50px", textAlign:"center",marginBottom:"25px"}}>
  <a href="http://localhost:3000/About"><strong>About Me</strong></a>
</button>
 */}

{/* 
<NavLink to="/Contact"><button className='btn btn-primary mb-3 mt-3'>CONTACT</button></NavLink>


<footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>


  <a href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook} style={{ fontSize: '25px', marginRight: '10px', backgroundColor:'#1877F2', borderRadius:'5px', marginTop:'10px'}} /></a>
  <a href="https://web.whatsapp.com/" target="_blank"><FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '25px' , marginRight: '10px', backgroundColor:'#25D366', borderRadius:'5px',marginTop:'10px'}} /></a>
  <a href="https://twitter.com/" target="_blank"><FontAwesomeIcon icon={faTwitter} style={{ fontSize: '25px' , marginRight: '10px', backgroundColor:'#1DA1F2', borderRadius:'5px',marginTop:'10px'}}/></a>
  <a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} style={{   fontSize: '25px', marginRight: '10px', background: 'linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045)', borderRadius: '5px',marginTop:'10px'}}/></a>
  


  
</footer> */}

<p className='text-light mt-3'>All rights are reserved by the owner</p>
</div>





    </>
  );
}

export default Services;









