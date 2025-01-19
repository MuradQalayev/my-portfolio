import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import '../src/App.css'; // ✅ Import CSS for styling
import homePageAnimation from '../public/frontend.json';
import scrollingImage from '../public/favicon.png'; // ✅ Import image

const Home = () => {
  const [showImage, setShowImage] = useState(false);

  // ✅ Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {  // Show image after 300px of scrolling
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
        
        {/* Left Side - Text */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="hi-text">Hi! I am <span className="name-highlight">Murad!</span></h1>
          <p className="lead">Welcome to my website! I create beautiful web applications. 🚀</p>
        </div>

        {/* Right Side - Animation */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <Lottie animationData={homePageAnimation} loop={true} className="animation-style" />
        </div>
      </div>

      {/* ✅ Image Section (Appears with Animation on Scroll) */}
      {showImage && (
        <div className="scroll-image-container">
          <img 
            src={scrollingImage} 
            alt="Scroll Revealed" 
            className="scroll-image slide-in"  // ✅ Animation class
          />
        </div>
      )}
    </div>
  );
};

export default Home;
