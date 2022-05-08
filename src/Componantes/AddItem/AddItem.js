import React from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItem = () => {
    
    const [user, loading] = useAuthState(auth);
    
    const handleItemSubmit=(event)=>{
        event.preventDefault();
        const carName = event.target.carName.value;
        const company = event.target.company.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const description = event.target.description.value;
        const picture = event.target.imgUrl.value;
        const email = user.email;
        const name = user.displayName;

        const product = {carName ,company, price,quantity,description,picture, email,name};
        const userProduct = {carName ,company, price,quantity,description,picture, email,name};

        fetch('https://enigmatic-headland-48112.herokuapp.com/myProducts/',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userProduct)
        })
        .then(res => res.json())
        .then(data =>{
            toast('Item Added');
            event.target.reset();
        }) 
        fetch('https://enigmatic-headland-48112.herokuapp.com/product',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data =>{
            event.target.reset();
        }) 
    }
    return (
        <div className='w-50 mx-auto mt-5 py-5 d-block'>
            <h2 className='text-center'>Add New Item</h2>
            <Form onSubmit={handleItemSubmit}>
                <Form.Group className="mb-3" controlId="formBasicCarName">
                    <Form.Control name="carName" type="text" placeholder="Enter Car Model Name" />
                </Form.Group>
                <Form.Group className="mb-3 d-none" controlId="formBasicCarName">
                    <Form.Control name="email" disabled value={user.email} type="email" placeholder="Enter Your Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCarName">
                    <Form.Control name="name" disabled value={user.displayName} type="email" placeholder="Enter Your Email" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicCompany">
                    <Form.Control name="company" type="text" placeholder="Enter Company Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Control name="price" type="text" placeholder="Enter Price Amount" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicQuantity">
                    <Form.Control name="quantity" type="number" placeholder="Enter Quantity" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Control name="description" as="textarea" type="text" placeholder="Enter Short Description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPicture">
                    <Form.Control name="imgUrl" type="text" placeholder="Enter Image Url" />
                </Form.Group>
                <button className='btn btn-primary' variant="primary" type="submit">
                    Submit
                </button>
            </Form>
        </div>
    );
};

export default AddItem;