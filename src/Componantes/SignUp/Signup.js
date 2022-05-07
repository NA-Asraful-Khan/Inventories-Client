import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast} from 'react-toastify';
import SocialLogin from '../SocialLogin/SocialLogin';
import { sendPasswordResetEmail } from 'firebase/auth';


const Signup = () => {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth ,{ sendEmailVerification: true });

    const handleSignup = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (password.length < 6) {
            return toast("Password should be minimum 6 character");
        }

        createUserWithEmailAndPassword(email, password);
        navigate('/');   
    }


    return (
        <div className='w-50 mx-auto mt-5 py-5 d-block'>
            <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <p>Already Have An Account?  <Link className='text-decoration-none' to='/login'>Click Here</Link></p>
                <button className='btn btn-primary' type="submit">
                    SignUp
                </button>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Signup;
