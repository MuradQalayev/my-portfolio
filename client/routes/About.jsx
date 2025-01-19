import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Lottie from 'lottie-react';

import myPhoto from '../public/22.jpg'; // Replace with your photo
import aboutAnimation from '../public/about.json'; // Replace with your Lottie animation
import '../src/About.css'; // CSS for styling

const About = () => {
  return (
    <div className="about-container">
      {/* Background Lottie Animation */}
      <Lottie animationData={aboutAnimation} loop={true} className="about-lottie" />

      {/* Foreground Content (Text & Image) */}
      <Container className="about-content">
        <h1 className="text-center mb-4">About Me</h1>

        <Row className="align-items-center">
          {/* Left Section - Photo */}
          <Col md={4} className="text-center">
            <Image
              src={myPhoto}
              alt="Murad Galayev"
              className="profile-photo"
              roundedCircle
              fluid
            />
          </Col>

          {/* Right Section - Text */}
          <Col md={8} className="about-text">
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
