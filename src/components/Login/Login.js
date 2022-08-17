import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import GoogleLogIn from '../GoogleLogIn/GoogleLogIn';


const Login = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const navigate=useNavigate();
    const location = useLocation();
    const from=location.state?.from?.pathname || "/";

    // let errorMessage;

    const handleEmailBlur=event=>{
        setEmail(event.target.value)
    }

    const handlePasswordBlur=event=>{
        setPassword(event.target.value)
    }
    

    if(user){
        navigate(from,{replace:true})
    }

    const handleUserUserSignIn=event=>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }
    return (
        <div >
            <h2 className='title-name'>Log In</h2>
            <form onSubmit={handleUserUserSignIn} className=' w-25 mx-auto bg-success bg-opacity-10 mt-4'>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={handleEmailBlur} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" className="form-control" id="exampleInputPassword1" required/>
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-primary ">login</button>
                <div className='container'>
                    <p >Are you New?<Link to="/signup">Create an account</Link></p>
                </div>
                
                <GoogleLogIn></GoogleLogIn>
            </form>
            
        </div>
    );
};

export default Login;