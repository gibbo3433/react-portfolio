import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Footer() {
    return (
      <>
        <Navbar bg="success" variant="dark" className="fixed-bottom">
          <Container className="text-center">
            <Nav className="mx-auto" style={{fontSize: '2.2rem'}}>
            <Nav.Link href="#resume" className="flex-fill">Resume</Nav.Link>
            <Nav.Link href="#resume" className="flex-fill">Resume</Nav.Link>
            <Nav.Link href="#resume" className="flex-fill">Resume</Nav.Link>
            </Nav>            
           </Container>
        </Navbar>
        </>
    );
  };