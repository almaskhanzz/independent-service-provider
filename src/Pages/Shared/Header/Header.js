import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='bg' variant="dark" sticky="top">
                <Container className='py-3'>
                    <Navbar.Brand className='text-white fs-4' as={Link} to="/">Independent service</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-white fs-5' as={Link} to="/service">Service</Nav.Link>
                            <Nav.Link className='text-white fs-5' as={Link} to="/category">Category</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-white fs-5' as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link className='text-white fs-5' as={Link} to="/about">About</Nav.Link>
                            {
                                user ?
                                    <Button onClick={handleSignOut} className='btn-color text-decoration-none text-dark fs-5' variant="link">Logout</Button>
                                    :
                                    <Nav.Link className='text-white fs-5' as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;