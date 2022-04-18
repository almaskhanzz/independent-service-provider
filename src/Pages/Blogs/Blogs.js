import React from 'react';
import './Blogs.css';
const Blog = () => {
    return (
        <div className='blog-container mx-auto py-4'>
            <h1 className='text-center'>Questions & Answers</h1>
            <div className='qus-ans mt-3 px-4'>
                <h5>Q1. Difference between authorization and authentication?</h5>
                <p>
                    Ans: Authentication is the process of determining who or what an entity is (i.e user, server, or device). When identifying a user, a web application may ask for a username and password. If a cloud service needs to find a server, it can ask for the IP address. Finally, devices may be identified by their MAC addresses, which are unique to each device. Authorization allows one party to get access to the information of another (or resource). Permission differs from authentication in the case of a home key. A door lock is indifferent about who uses the key to gain access to the house. It simply acknowledges that people who have the house key have permission to enter.
                </p>
                <h5>Q2. Why are you using firebase? What other options do you have to implement authentication?</h5>
                <p>
                    Ans: Google Firebase is a Google-backed app development platform that allows developers to create apps for iOS, Android, and the web. Firebase delivers analytics tracking, reporting, and app issue fixes, as well as marketing and product experimentation capabilities.

                    there are some other options like monogodb, auth0, passport, okta, json web token, amazon cognito, keycloak.


                </p>
                <h5>Q3. What other services does firebase provide other than authentication</h5>
                <p>
                    Ans: Firebase can provide many things other than authentication. For an example if anyone want to deploy the website then he/she needs a hosting method, the firebase can give them this hosting method without payment or payment. On the other hand, firebase can provide firestore database and realtime database to store the website's data. To solve common problems of a app, firebase can help with their machine learning.
                </p>
            </div>
        </div>
    );
};

export default Blog;