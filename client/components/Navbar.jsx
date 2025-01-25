import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/Navbar.css';

const Navibar = () => {
  const [toggleClicked, setToggleClicked] = useState(false);
  const navRef = useRef(null); // Create a reference for the Navbar

  const handleScrollTo = (sectionId) => (event) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setToggleClicked(false); // Close the navbar
  };

  // Close the Navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setToggleClicked(false); // Collapse the Navbar
      }
    };

    document.addEventListener('mousedown', handleClickOutside); // Add listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Clean up
    };
  }, []);

  return (
    <Navbar
      ref={navRef} // Attach the ref here
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      expanded={toggleClicked} // Use expanded instead of in
      className="navbar"
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex justify-content-start">
          <img
            src="/favicon.png"
            className="rounded"
            style={{ width: '1cm', height: '1cm', objectFit: 'cover' }}
            alt="Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setToggleClicked((prev) => !prev)}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#about"
              onClick={handleScrollTo('about')}
              className="d-flex justify-content-center align-items-center"
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#motivation"
              onClick={handleScrollTo('motivation')}
              className="d-flex justify-content-center align-items-center"
            >
              My motivation!
            </Nav.Link>
            <Nav.Link
              href="#education"
              onClick={handleScrollTo('education')}
              className="d-flex justify-content-center align-items-center"
            >
              Education
            </Nav.Link>
            <Nav.Link
              href="#projects"
              onClick={handleScrollTo('projects')}
              className="d-flex justify-content-center align-items-center rainbow-text"
            >
              Projects
            </Nav.Link>

            <Nav.Link href="https://github.com/MuradQalayev" target="_blank">
              <i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i>{' '}
              {toggleClicked ? 'GitHub' : ''}
            </Nav.Link>
            <Nav.Link href="https://linkedin.com/in/murad-galayev-aa3b22187" target="_blank">
              <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>{' '}
              {toggleClicked ? 'LinkedIn' : ''}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navibar;
