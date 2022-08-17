import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {
    const[email,setEmail]=useState(''); 
    const[password,setPassword]=useState('');
    const[confirmPassword,setConfirmPassword]=useState('');
    const[error,setError]=useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        
      ] = useCreateUserWithEmailAndPassword(auth);


    const handleEmailBlur=event=>{
        setEmail(event.target.value)
    }

    const handlePasswordBlur=event=>{
        setPassword(event.target.value)
    }

    const handleConfirmPassword=event=>{
        setConfirmPassword(event.target.value)
    }

    const handleCreateUser=event=>{
        event.preventDefault();
        
        if(password !== confirmPassword){
            setError("Passwords are not matched")
            return;
        }
        createUserWithEmailAndPassword(email,password);
    }
    return (
        <div>
            <h2 className='title-name'>sign up</h2>
            <form onSubmit={handleCreateUser} className=' w-25 mx-auto bg-success bg-opacity-10 mt-4'>
                
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={handleEmailBlur} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" className="form-control" id="exampleInputPassword1" required/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input onBlur={handleConfirmPassword} type="password" className="form-control" id="exampleInputPassword1" required/>
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <p>{error}</p>
                <button type="submit" className="btn btn-primary ">signup</button>
                <div className='container'>
                    <p >Have an Account?<Link to="/login">Please login Here</Link></p>
                </div>
                
            </form>
        </div>
    );
};

export default SignUp;