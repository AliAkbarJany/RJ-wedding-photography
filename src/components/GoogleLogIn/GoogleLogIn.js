import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const GoogleLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate();
    

    if(user){
        navigate('/home')
    }
    return (
        <div>
            <div>
                <p>or</p>
            </div>
            <div>
                <button onClick={()=> signInWithGoogle()} className='btn btn-success my-3 '>Google Sign In</button>
            </div>
        </div>
    );
};

export default GoogleLogIn;