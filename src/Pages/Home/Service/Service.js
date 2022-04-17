import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    const navigate = useNavigate();
    const handleServiceDetails = id => {
        navigate(`service/checkout/${id}`);
    }
    return (
        <div className='service-container'>
            <div className='service'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h5>{price}$</h5>
                <p>{description}</p>
                <button className='w-75 d-block mx-auto' onClick={() => handleServiceDetails(id)}>{name}</button>
            </div>
        </div>
    );
};

export default Service;