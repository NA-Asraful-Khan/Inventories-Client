import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const google=()=>{
        signInWithGoogle();
    }
    if(user){
        navigate('/home');
    }
    
    return (
        <div className='d-flex justify-content-center'>
            <button  onClick={() => google()} className='btn btn-danger'><img style={{width: '30px'}} className="" src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="" /> Sign in with Google</button>
        </div>
    );
};

export default SocialLogin;