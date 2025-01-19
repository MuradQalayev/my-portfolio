import React from 'react';
import '../src/Motivation.css'; // Import CSS for styling
import { Container } from 'react-bootstrap';


const Motivation = () => {

  const images = [
    "/smoki1.jpg",
    "/smoki2.jpg",
    "/smoki3.jpg",
    "/smoki4.jpg",
    "/smoki5.jpg" ];

  return (
    <Container>
      <h1>My Motivation</h1>
      <div className="motivation-container">
      
      {images.map((img, index) => (
        <img key={index} src={img} alt="Smoki" className={`bubble bubble-${index}`} />
      ))}
    </div>
    </Container>

  );
};

export default Motivation;
