import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../src/Navbar.css'

const Navibar = () => {
  const [toggleClicked, setToggleClicked] = useState(false);

  const handleScrollToAbout = (event) => {
    event.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
    setToggleClicked(false); 
  };
  const handleScrollToMotivation = (event) => {
    event.preventDefault();
    const aboutSection = document.getElementById('motivation');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
    setToggleClicked(false);
  };
  const handleScrollToEducation = (event) => {
    event.preventDefault();
    const aboutSection = document.getElementById('education');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
    setToggleClicked(false);
  };
  const handleScrollToProjects = (event) => {
    event.preventDefault();
    const aboutSection = document.getElementById('projects');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
    setToggleClicked(false);
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="navbar fixed-top">
      <Container>
      <Navbar.Brand href="/" className="d-flex justify-content-start">
      <img
        src="/favicon.png"
        className='rounded'
        style={{ width: '1cm', height: '1cm', objectFit: 'cover' }}
        alt="Logo"
      />
    </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setToggleClicked(prev => !prev)}
        />

        <Navbar.Collapse id="basic-navbar-nav" in={toggleClicked}>
          <Nav className="ms-auto">
            <Nav.Link href="#about" onClick={handleScrollToAbout} className="d-flex justify-content-center align-items-center"
            >
              About
            </Nav.Link>
            <Nav.Link href="#motivation" onClick={handleScrollToMotivation} className="d-flex justify-content-center align-items-center"
            >
              My motivation!
            </Nav.Link>
            <Nav.Link href="#education" onClick={handleScrollToEducation} className="d-flex justify-content-center align-items-center"
            >
              Education
            </Nav.Link>
            <Nav.Link href="#projects" onClick={handleScrollToProjects} className="d-flex justify-content-center align-items-center rainbow-text"
            >
              Projects
            </Nav.Link>
            
            <Nav.Link href="https://github.com/MuradQalayev" target="_blank">
              <i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i> {toggleClicked ? 'GitHub' : ''}
            </Nav.Link>
            <Nav.Link href="https://linkedin.com/in/murad-galayev-aa3b22187" target="_blank">
              <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i> {toggleClicked ? 'LinkedIn' : ''}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navibar;
