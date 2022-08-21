import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div >

            <h1 className='title-name'>Blogs</h1>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>

                <div class="card w-full bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Difference between Authentication & Authorization</h2>
                        <p> <strong>Authentication :</strong> User identity is confirmed.User and user server is verified.
                            User can partially change the authentication details as per the requirement
                        </p>
                        <p> <strong>Authorization :</strong>Here, the user is given permission to access the system / resources after validation
                            Here it is validated if the user is allowed to access via some defined rules.
                        </p>

                    </div>
                </div>

                <div class="card w-full bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Why am I using Firebase?</h2>

                        <div>
                            <li className='text-left'>Easy sign-in with any platform</li>
                            <li className='text-left'> Flexible, drop-in UI</li>
                            <li className='text-left'> Comprehensive security</li>
                            <li className='text-left'> Fast implementation</li>
                        </div>
                    </div>
                </div>


                <div class="card w-full bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Some other services of Firebase are given below</h2>
                        <div>
                            <li className='text-left'>Realtime Database</li>
                            <li className='text-left'>Remote config</li>
                            <li className='text-left'>Hosting</li>
                            <li className='text-left'>Cloud Messaging</li>
                            <li className='text-left'>Cloud Storage</li>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;