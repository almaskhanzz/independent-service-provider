import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    const navigate = useNavigate();
    const handleServiceDetails = id => {
        navigate(`checkout/${id}`);
    }
    return (
        <div className='service-container'>
            <div className='service'>
                <img src={img} alt="" />
                <h3 className='names'>{name}</h3>
                <h5 className='price'>{price}$</h5>
                <p className='description'>{description}</p>
                <button className='w-75 d-block mx-auto' onClick={() => handleServiceDetails(id)}>{name}</button>
            </div>
        </div>
    );
};

export default Service;