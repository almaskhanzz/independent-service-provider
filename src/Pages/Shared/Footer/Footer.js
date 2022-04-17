import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className='footer py-4'>
            <h4 className='text-center'>Copyright {new Date().getFullYear()} Tv Host. All rights reserved.</h4>
        </div>
    );
};

export default Footer;