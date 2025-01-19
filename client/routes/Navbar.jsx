import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navibar = () => {
  const [toggleClicked, setToggleClicked] = useState(false);

  const handleScrollToAbout = (event) => {
    event.preventDefault(); // Prevent default link behavior
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    }
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/" className="d-flex justify-content-start">
          <em>Welcome to Murad Galayev's world</em>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setToggleClicked(prev => !prev)} />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" onClick={handleScrollToAbout} className="d-flex justify-content-end">
              About
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
