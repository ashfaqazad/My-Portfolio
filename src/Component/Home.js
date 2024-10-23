import React from 'react';

function Home() {
  return (
    <>

<header className='bg-gradient-to-r from-black via-black to-transparent bg-cover bg-center text-white h-screen flex flex-col justify-center items-center'>
  <div className="bg-cover bg-no-repeat bg-fixed h-screen bg-center" style={{ backgroundImage: `url('../Images/laptop6.jpg')`, width: '100vw', height: '100vh' }}>
    <div className="container mx-auto py-5">
      <div className='text-center flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold py-5'>
          <strong>Web Development Journey!</strong>
        </h1>
        <p className='py-4 px-5 text-lg text-center'>As a web developer, I embark on a journey where I accompany you, presenting my services along the way. Join me in this digital adventure, where I bring expertise to enhance your online presence. Together, let's explore the possibilities and create a web experience that truly stands out. Welcome to a collaboration of innovation and creativity!</p>
      </div>
    </div>
  </div>
</header>





      <section className='bg-gray-100 shadow py-10'>
  <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row justify-around items-center py-5">
      <div className='lg:w-1/2 lg:mr-8 mb-8 lg:mb-0'>
        <h2 className='text-3xl font-bold mb-6'>
          <strong>About Me</strong>
        </h2>
        <p className='text-lg text-justify'>
          Hello, I'm Ashfaque Ahmed, and I specialize in making websites look great! I've spent quite some time working with HTML5, CSS3, JavaScript, React JS, and Bootstrap these are like the building blocks for the visual part of websites. WordPress is another area where I'm quite skilled, especially in creating beautiful designs.

          One thing I really enjoy is learning about new technologies and trying them out. It's like solving puzzles for me each technology is a new piece to explore and experiment with. When it comes to building websites, I've used HTML5, CSS3, JavaScript, React JS, and Bootstrap in different projects, making each one unique. I've also put my skills to work in WordPress, using it as a canvas to paint attractive and functional designs.

          Keeping up with the latest trends in the web development industry is something that really grabs my attention. It's like watching a movie you never know what exciting things are going to happen next. I'm always on the lookout for new technologies to play around with, to see how they can make websites even better <span className='text-blue-500'><a href="http://localhost:3001/About">Read More</a></span>
        </p>
      </div>
      <div className="lg:w-1/2">
        <img src="../Images/laptop4.jpg" className='w-full shadow-lg rounded-lg' alt="" />
      </div>
    </div>
  </div>
</section>




      <section className='container py-10' id='service'>
          <h2 className='text-center text-3xl font-bold mb-8'>
            <strong>Services</strong>
          </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="card shadow bg-blue-900 text-white">
            <div className="card-body">
              <h5 className='card-title text-center mt-5 font-bold'>
                Foundations
              </h5>
              <p className='card-text text-center py-4'>Crafting solid foundations with HTML, CSS, and Bootstrap to create visually appealing and responsive web designs for a seamless user experience.</p>
              <div className='flex justify-center'>
                <a href="http://localhost:3001/Services" className='btn shadow text-white bg-primary'>View More</a>
              </div>
            </div>
          </div>

          <div className="card shadow bg-gray-300">
            <div className="card-body">
              <h5 className='card-title text-center mt-5 font-bold'>
                Interactivity
              </h5>
              <p className='card-text text-center py-4'>Elevate user engagement using JavaScript and React JS, delivering dynamic and interactive web solutions that captivate and enhance the user experience.</p>
              <div className='flex justify-center'>
                <a href="http://localhost:3001/Services" className='btn shadow bg-dark text-white'>View More</a>
              </div>
            </div>
          </div>

          <div className="card shadow bg-primary">
            <div className="card-body">
              <h5 className='card-title text-center mt-5 font-bold text-white'>
                Content Management:
              </h5>
              <p className='card-text text-center py-4 text-white'>Simplify content management with WordPress, empowering you to efficiently organize, update, and present your website's content with ease and flexibility.</p>
              <div className='flex justify-center'>
                <a href="#" className='btn shadow text-white bg-dark'>View More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto flex justify-center items-center py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <h1 className='text-center text-3xl font-bold mb-5 col-span-3'>
            <strong>Images portraying the services I provide</strong>
          </h1>
          <div className="card shadow">
            <img src="../Images/img9.jpg" className='w-full h-56 object-cover rounded-lg' alt="" />
          </div>

          <div className="card shadow">
            <img src="../Images/img10.jpg" className='w-full h-56 object-cover rounded-lg' alt="" />
          </div>

          <div className="card shadow">
            <img src="../Images/img13.jpg" className='w-full h-56 object-cover rounded-lg' alt="" />
          </div>
        </div>
      </div>

      <div className="bg-black flex justify-center items-center py-10">
        <p className='text-white text-center'>All rights are reserved by the owner</p>
      </div>
    </>
  );
}

export default Home;





// linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)),