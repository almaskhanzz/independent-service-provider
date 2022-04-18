import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='w-50 mx-auto bg-color'>
            <h1 className='text-center pt-4 pb-4'>About me</h1>
            <div className='px-3'>
                <h3 className='text-center'>Name: Almas Khan Limon</h3>
                <h5 className='text-center'>Address: Joydebpur, Gazipur, Dhaka</h5>
                <h5 className='text-center'>Education: Completed Bsc in Computer Science and Engineering and Currently started Msc in Data Science in TU Dortmund, Germany.</h5>
                <p className='fs-5 script'>As I written earlier I have completed my Bsc already and started the Msc program. I'm taking three language preparation parallelly at this time and its too hard to maintain the consistency because I have to give proper time to cover all of them. I've divided the time to touch all the courses, even if it gives me so much mental pressure. I try to co-operate with all the courses to get in the flow. And I think I'll complete all the courses with gaining proper knowledge. </p>
            </div>
        </div>
    );
};

export default About;