import React from 'react';
import { useParams } from 'react-router-dom';
import './Checkout.css';
const Checkout = () => {

    const { checkoutId } = useParams();
    return (
        <div className='w-75 mx-auto'>
            <h1>Check out your booking! your id: {checkoutId}</h1>
        </div>
    );
};

export default Checkout;