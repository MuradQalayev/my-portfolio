import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import '../src/App.css'; 
import homePageAnimation from '../public/frontend.json';
import About from './About';

const Home = () => {


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {  
        setShowImage(true);
      } else {
        setShowImage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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

    </div>
  );
};

export default Home;
