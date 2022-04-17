import React, { useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate('/home');
    }
    const handleSignIn = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = () => {
        navigate('/register');
    }
    return (
        <div className='container w-50 mx-auto my-4'>
            <h1 className='text-primary text-center'>Please Login</h1>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='text-danger'>{error?.message}</p>
            {
                loading && <p><Spinner className=' d-block mx-auto' animation="border" variant="primary" /></p>
            }
            <p className='mt-3'>New to Genius Car? <span className='text-danger register-nav' onClick={navigateRegister}>Please Register</span></p>
        </div>
    );
};

export default Login;