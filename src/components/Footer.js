import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
    return (
        <Navbar className='bg-danger bg-opacity-75 pt-3 pb-3'>
            <Container>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='justify-content-center flex-grow-1'>
                        <Nav.Link target="_blank" href='https://github.com/dtm589'>GitHub</Nav.Link>
                        <Nav.Link target="_blank" href='https://www.linkedin.com/in/derek-marchese-083bb9187/'>LinkedIn</Nav.Link>
                        <Nav.Link target="_blank" href='https://stackoverflow.com/users/21413063/dtm589'>Stack Overflow</Nav.Link>
                        <Nav.Link target="_blank" href='https://docs.google.com/document/d/1m0HGsMtAKk7Y_C8o3H_f8bGxrDCE2ckiSlZQGAyl9Mw/edit?usp=sharing'>Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}