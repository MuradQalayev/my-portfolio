import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import '../src/About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the image is in view
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="about-section">
      <Container className="about-content">
        <h1 className="text-center mb-4">About Me</h1>

        <Row className="align-items-center">
          <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
            <Image
              ref={imageRef}
              src="/22.jpg" // Directly reference image
              alt="Murad Galayev"
              className={`profile-photo ${isVisible ? 'animate-image' : ''}`} // Add animation class when visible
              roundedCircle
              fluid
            />
          </Col>

          <Col xs={12} md={8} className="about-text">
            <h2>Hello! I'm <span className="name-highlight">Murad Galayev</span></h2>
            <p>
              I’m a passionate <strong>web developer</strong> who loves building sleek,
              high-performance websites and applications. My expertise includes:
            </p>
            <ul>
              <li>🔥 Frontend Development (React.js, Bootstrap, CSS)</li>
              <li>⚙️ Backend (Node.js, Express.js, MongoDB)</li>
              <li>🎨 UI/UX Design & Responsive Web Design</li>
              <li>🚀 Always learning & improving!</li>
            </ul>
            <p>
              Let's create something amazing together! Feel free to connect with me on 
              <a href="https://linkedin.com/in/murad-galayev-aa3b22187" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
