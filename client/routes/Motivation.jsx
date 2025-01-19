import React from 'react';
import '../src/Motivation.css'; // Import CSS for styling

const Motivation = () => {

  const images = [
    "../public/smoki1.jpg",
    "../public/smoki2.jpg",
    "../public/smoki3.jpg",
    "../public/smoki4.jpg",
    "../public/smoki5.jpg" ];

  return (
    <div className="motivation-container">
      {images.map((img, index) => (
        <img key={index} src={img} alt="Smoki" className={`bubble bubble-${index}`} />
      ))}
      <h1 className="motivation-text">Smoki, the most adorable cat! 🐱💖</h1>
    </div>
  );
};

export default Motivation;
