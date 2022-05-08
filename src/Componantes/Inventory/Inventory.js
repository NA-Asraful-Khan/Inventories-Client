import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Inventory = () => {
    const {inventoryId} = useParams();
    const [item, setItem] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/product/${inventoryId}`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setItem(data));
    },[])
//item.picture item.carName item.company item.price item.quantity item.description
    const handleDeliver=()=>{
        const minusQuantity = item.quantity-1;
        const newdata ={
            picture: item.picture,
            carName: item.carName,
            company: item.company,
            price: item.price,
            quantity: minusQuantity,
            description: item.description
        }
        
        const url = `http://localhost:5000/product/${inventoryId}`;
        fetch(url,{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newdata)
        })
        .then(res => res.json())
        .then(data =>{
            setItem(newdata);
        }) 
    }


    const handleUpdate=(event)=>{
        event.preventDefault();
        const carName = event.target.carName.value;
        const company = event.target.company.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const description = event.target.description.value;
        const picture = event.target.imgUrl.value;

        const product = {carName ,company, price,quantity,description, picture};
        const url = `http://localhost:5000/product/${inventoryId}`;
        fetch(url,{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data =>{
            toast('Item Updated');
            setItem(product);
            event.target.reset();
        }) 
    }
     
    return (
        <div className='mt-5 py-5'>
            <Card className='container w-50 mx-auto col-12 col-md-6 col-lg-4 d-flex justify-content-center my-2 py-2 shadow-lg card-width'>
                <Card.Img variant="top" src={item.picture} />
                <Card.Body>
                    <Card.Title>Model: {item.carName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Brand: {item.company}</Card.Subtitle>
                    <Card.Subtitle className="mb-2">Price: ${item.price}</Card.Subtitle>
                    <Card.Subtitle className="mb-2">Quantity: {item.quantity}Pcs</Card.Subtitle>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-center ">
                    <button onClick={()=>handleDeliver()} className='btn btn-warning d-block m-2'>Deliver</button>
                </Card.Footer>
            </Card>

            <h2 className='text-center'>Restock Items</h2>
            <Form className='w-50 mx-auto' onSubmit={handleUpdate}>
                <Form.Group className="mb-3" controlId="formBasicCarName">
                    <Form.Control disabled value={item.carName} name="carName" type="text" placeholder="Enter Car Model Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCompany">
                    <Form.Control disabled value={item.company} name="company" type="text" placeholder="Enter Company Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Control disabled value={item.price} name="price" type="text" placeholder="Enter Price Amount" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicQuantity">
                    <Form.Control name="quantity" type="number" placeholder="Enter Quantity" />
                </Form.Group>

                <Form.Group className="mb-3 d-none" controlId="formBasicDescription">
                    <Form.Control disabled value={item.description} name="description" as="textarea" type="text" placeholder="Enter Short Description" />
                </Form.Group>

                <Form.Group className="mb-3 d-none" controlId="formBasicPicture">
                    <Form.Control disabled value={item.picture} name="imgUrl" type="text" placeholder="Enter Image Url" />
                </Form.Group>
                <button className='btn btn-primary' variant="primary" type="submit">
                    Submit
                </button>
            </Form>
            <div className='text-center my-2'>
                <Link to="/inventory" className='btn btn-danger text-center mx-auto '>Manage Inventory</Link>
            </div>
        </div>
    );
};

export default Inventory;