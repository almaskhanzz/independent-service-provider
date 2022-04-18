import React from 'react';
import './Blogs.css';
const Blog = () => {
    return (
        <div className='blog-container mx-auto my-4'>
            <h1 className='text-center'>Questions & Answers</h1>
            <div className='qus-ans mt-3'>
                <h5>Q1. Difference between authorization and authentication?</h5>
                <p>
                    Ans: Authentication is the process of determining who or what an entity is (i.e user, server, or device). When identifying a user, a web application may ask for a username and password. If a cloud service needs to find a server, it can ask for the IP address. Finally, devices may be identified by their MAC addresses, which are unique to each device. Authorization allows one party to get access to the information of another (or resource). Permission differs from authentication in the case of a home key. A door lock is indifferent about who uses the key to gain access to the house. It simply acknowledges that people who have the house key have permission to enter.
                </p>
                <h5>Q2. Why are you using firebase? What other options do you have to implement authentication?</h5>
                <p>
                    Ans:
                </p>
                <h5>Q3. What other services does firebase provide other than authentication</h5>
                <p>
                    Ans:
                </p>
            </div>
        </div>
    );
};

export default Blog;