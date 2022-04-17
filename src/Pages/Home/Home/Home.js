import React from 'react';
import './Home.css';
import banner from '../../../Assets/Images/banner.jpg';
import Services from '../Services/Services';
const Home = () => {
    return (
        <div className='home-container'>
            <div>
                <img className='w-100' src={banner} alt="" />
            </div>
            <div>
                <Services />
            </div>

        </div>
    );
};

export default Home;