import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';



const Navibar = () => {
  return (
    (
        <>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href='/' className='d-flex justify-content-start'><em>Welcome to Murad Galayev`s  world</em></Navbar.Brand>
              <Nav className="ms-auto">
                <Nav.Link href="https://github.com/MuradQalayev" target='_blank'><i class="bi bi-github" style={{fontSize: '1.5rem'} }></i></Nav.Link>
                <Nav.Link href="https://linkedin.com/in/murad-galayev-aa3b22187" target='_blank'><i class="bi bi-linkedin" style={{fontSize: '1.5rem'} }></i></Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
      )
  )
}

export default Navibar