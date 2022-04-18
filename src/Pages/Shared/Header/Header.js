import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth);
        navigate('/home');
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='bg' variant="dark" sticky="top">
                <Container className='py-3'>
                    <Navbar.Brand className='' as={Link} to="/"><span className='host-color'>Your</span> <span className='tv-host'>favorite Tv host</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
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