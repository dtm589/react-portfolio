import React from 'react';
import '../styles/Navigation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
    return (
        <Navbar expand='lg' className='bg-danger bg-opacity-75 pt-3 pb-3'>
            <Container>
                <Navbar.Brand className='person-title me-5'>Derek Marchese | Full-Stack Developer</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='justify-content-end flex-grow-1'>
                        <Nav.Link href='#'>About Me</Nav.Link>
                        <Nav.Link href='#'>Portfolio</Nav.Link>
                        <Nav.Link href='#'>Contact Me</Nav.Link>
                        <Nav.Link target="_blank" href='https://docs.google.com/document/d/1m0HGsMtAKk7Y_C8o3H_f8bGxrDCE2ckiSlZQGAyl9Mw/edit?usp=sharing'>Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
