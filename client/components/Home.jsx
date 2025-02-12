import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import '../src/App.css'; 
import homePageAnimation from '../public/frontend.json';
import { FaArrowUp } from 'react-icons/fa';
import About from '../components/About.jsx';
import Motivation from '../components/Motivation.jsx';
import Projects from '../components/Projects.jsx';
import Education from '../components/Education.jsx';



const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {  
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };


  return (
    <>
  <div className="container">
      <div className="row vh-100 d-flex align-items-center">
        
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="hi-text">Hi! I am <span className="name-highlight">Murad!</span></h1>
          <p className="lead">Welcome to my website! I create beautiful web applications. 🚀</p>
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <Lottie animationData={homePageAnimation} loop={true} className="animation-style" />
        </div>
      </div>

      <div id='about' className='about-section'>
        <About/>
      </div>
      <div id='education'>
        <Education/>
      </div>
      <div id='projects' className='projects'>
        <Projects/>
      </div>  
    </div>
    <div id='motivation' className='motivation-section'>
    <Motivation/>
  </div>
  <button 
        className={`scroll-to-top-btn ${showScrollTop ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="icon" />
      </button>
  </>
  );
};

export default Home;
