import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        
             <div >

                 <h1 className='title-name'>Blogs</h1>
            
                 <div className='blog-container'>

                    <div className='blog mb-3'>
                        <h3>Difference between Authentication & Authorization</h3>
                        <p> <strong>Authentication :</strong> User identity is confirmed.User and user server is verified.
                        User can partially change the authentication details as per the requirement
                        </p>
                        <p> <strong>Authorization :</strong>Here, the user is given permission to access the system / resources after validation
                        Here it is validated if the user is allowed to access via some defined rules.
                        </p>
                    </div>

                    <div className='blog mb-3'>
                        <h3>Why am I using Firebase?</h3>
                        <ul type="circle">
                            <li>Easy sign-in with any platform</li>
                            <li> Flexible, drop-in UI</li>
                            <li> Comprehensive security</li>
                            <li> Fast implementation</li>
                            
                        </ul>
                    </div>
                        
                    <div className='blog'>
                        <h3>Some other services of Firebase are given below</h3>
                        <ul>
                            <li>Realtime Database</li>
                            <li>Remote config</li>
                            <li>Hosting</li>
                            <li>Cloud Messaging</li>
                            <li>Cloud Storage</li>
                        </ul>
                    </div>

                </div>
             </div>
    );
};

export default Blogs;