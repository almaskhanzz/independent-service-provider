import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='bg' variant="dark" sticky="top">
                <Container className='py-3'>
                    <Navbar.Brand className='text-white fs-4' as={Link} to="/">Independent service</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-white fs-5' as={Link} to="/experts">Service</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-white fs-5' as={Link} to="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;