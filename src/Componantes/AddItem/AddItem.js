import React from 'react';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const AddItem = () => {

    
    const handleItemSubmit=(event)=>{
        event.preventDefault();
        const carName = event.target.carName.value;
        const companyName = event.target.companyName.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const description = event.target.description.value;
        const picture = event.target.imgUrl.value;

        const product = {carName ,companyName, price,quantity,description,picture};
        fetch('http://localhost:5000/product',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data =>{
            toast('Item Added');
            event.target.reset();
        })

        
        
        
    }
    return (
        <div className='w-50 mx-auto mt-5 py-5 d-block'>
            <Form onSubmit={handleItemSubmit}>
                <Form.Group className="mb-3" controlId="formBasicCarName">
                    <Form.Control name="carName" type="text" placeholder="Enter Car Model Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCompany">
                    <Form.Control name="companyName" type="text" placeholder="Enter Company Name" />
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