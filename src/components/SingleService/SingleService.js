import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SingleService.css'

const SingleService = ({service}) => {
    console.log(service)
    const{img,name,description,price,id}=service;
    // const[user]=useAuthState(auth)
    const navigate=useNavigate()
    return (
        <div className='service col-sm-12 col-md-12'>
            <img src={img} alt="" />
            <h3 className='title-name'>{name}</h3>
            <p>{description}</p>
            <p>Cost : {price}</p>
            <button onClick={()=>navigate('/checkout')} className='btn btn-primary px-5 my-3'>Check Out</button>
        </div>
    );
};

export default SingleService;