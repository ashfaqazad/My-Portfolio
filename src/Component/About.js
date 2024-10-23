import React from 'react';

function About() {
  return (
    <>
      <section className='bg-cover bg-center text-white h-screen flex flex-col justify-center items-center' style={{ backgroundImage: `url('../Images/laptopp7.jpg')` }}>
        <div className="container">
          <div className="col-12">
            <h1 className='text-3xl text-center text-white font-serif'>
              <strong>About Me</strong>
            </h1>
          </div>
        </div>
      </section>

      <div className="container shadow bg-gray-100 py-5 px-5">
        <div className='col-12'>
          <p className='text-lg text-justify'>
            Now, when it comes to creating websites, I like to tailor them to your needs. Your requirements become my guide, and I use my skills in HTML5, CSS3, JavaScript, React JS, Bootstrap, and WordPress to develop static websites that are not just good but awesome. I'm here to turn your vision into a reality, crafting a website that not only meets your needs but also stays ahead of the curve by incorporating the latest and coolest technologies in web development.

            So, if you're looking for someone who loves building websites, is excited about the newest technologies, and can bring your ideas to life, then I'm your guy. Let's work together to create a fantastic website that stands out and gives users a great experience!
          </p>
        </div>
      </div>

      <div className='container mx-auto'>
        <div className="row justify-center align-items-center">
          <div className="col-12 col-lg-6">
            <div className="my-skill">
              <h2 className='text-center text-xl mb-4'>Skills</h2>
              <div className="html-skill h-2 bg-blue-500 mb-2"></div>
              <div className="css-skill h-2 bg-green-500 mb-2"></div>
              <div className="js-skill h-2 bg-yellow-500 mb-2"></div>
              <div className="bst-skill h-2 bg-indigo-500 mb-2"></div>
              <div className="wp-skill h-2 bg-pink-500 mb-2"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black flex justify-center items-center py-10">
        <p className='text-white text-center'>All rights are reserved by the owner</p>
      </div>
    </>
  );
}

export default About;
