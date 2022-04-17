import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    //google sign in
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }
    if (loading) {
        return <Loading />;
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
            </div>
            {errorElement}
            <div>
                <Button onClick={handleGoogleSignIn} className='w-50 d-block mx-auto my-2'>Sign with Google</Button>
                <Button className='w-50 d-block mx-auto'>Sign with Github</Button>
            </div>
        </div>
    );
};

export default SocialLogin;