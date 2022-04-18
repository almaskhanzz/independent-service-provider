import './login.css';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    //reset password
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
    );
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // if (loading) {
    //     return <Loading />
    // }
    if (user) {
        navigate(from, { replace: true });
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
    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }

    }

    return (
        <div className='login-container mx-auto my-4'>
            <h1 className='color-log-reg text-center'>Please Login</h1>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <div className='d-flex align-items-center justify-content-between'>
                        <Form.Label className='mb-0'>Password</Form.Label>
                        <p className='mt-2 mb-2'><span onClick={handleResetPassword} className='text-primary register-nav' >Reset Password</span></p>
                    </div>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <button className="w-50 btn-color d-block mx-auto btn-button" type="submit">
                    Login
                </button>
            </Form>
            <p className='text-danger mt-2'>{error?.message} {error1?.message}</p>
            {
                loading && <Loading />
            }
            <p className='mt-3'>Don't have an account? <span className='text-primary register-nav' onClick={navigateRegister}>Please Register</span></p>
            <SocialLogin />
            <ToastContainer />
        </div>
    );
};

export default Login;