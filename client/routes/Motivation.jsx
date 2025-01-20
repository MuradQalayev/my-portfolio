import React from 'react';
import '../src/Motivation.css'; 
import { Container } from 'react-bootstrap';


const Motivation = () => {

  const images = [
    "/smoki1.jpg",
    "/smoki2.jpg",
    "/smoki3.jpg",
    "/smoki5.jpg",
    "/books.avif",
    "/mercedes.png",
    "/programming.avif",
    "/roma.avif",
    "/family.jpg",
    "/mercedes1.jpeg",

  ];

  return (
    <>
    <h1>My Motivation</h1>
    <Container fluid className="motivation-container">
      
      <div className="motivation-container">
      
      {images.map((img, index) => (
        <img key={index} src={img} alt="Smoki" className={`bubble bubble-${index}`} />
      ))}
    </div>
    </Container>
    </>
  );
};

export default Motivation;
