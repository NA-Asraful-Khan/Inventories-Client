
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    

    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);

    }

    if (user) {
        navigate(from);
    }
    if (error) {
        toast(error?.message);
    }

    const resetPassword = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        if (!email) {
            return alert("Please input email");
        } else {
            sendPasswordResetEmail(email);
            toast('email sent');
        }

    };

    return (
        <div className='w-50 mx-auto mt-5 py-5 d-block'>
            <Form onSubmit={handleSignin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <p>New To this Site? For Sign Up <Link className='text-decoration-none' to='/signup'>Click Here</Link></p>
                <button className='btn btn-primary' type="submit">
                    Sign In
                </button>
            </Form>
            <p>Forgot Password?  <button className='btn text-primary'
                    onClick={async () => {
                        if (!email) {
                            return toast("Please input email");
                        } else {
                            await sendPasswordResetEmail(email);
                            toast('Recovery Email sent');
                        }
                    }}
                >
                    Reset password
                </button></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;