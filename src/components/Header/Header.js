import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const[user]=useState(auth)
    console.log(user)
    const handleSignOut=()=>{
        signOut(auth);
    }
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark col-sm-12 col-md-12">
                <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="header navbar-nav mx-auto">
                        <Link to="/">HOME</Link>
                        <Link to="/blogs">BLOGS</Link>
                        <Link to="/about">ABOUT</Link>
                        <Link to="/checkout">CHECKOUT</Link>
                        <Link to="/login">LOGIN</Link>
                        
                        <button className='btn btn-danger' onClick={handleSignOut}>Sign out</button>
                        {/* {
                            user?<button onClick={handleSignOut}>Sign out</button>:<Link to="/login">LOGIN</Link>
                        } */}
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;