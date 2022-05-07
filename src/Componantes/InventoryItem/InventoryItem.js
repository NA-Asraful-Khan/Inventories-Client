
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const InventoryItem = ({ item }) => {
    const { _id, quantity, carName, company, price, description, picture } = item;
    const navigate = useNavigate();
    const navigatetoDetail=id=>{
        navigate(`/inventory/${id}`)
    };
    return (
        <div className='container col-12 col-md-6 col-lg-4 d-flex justify-content-center my-2'>
            <Card className='py-2 shadow-lg card-width'>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>Model: {carName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Brand: {company}</Card.Subtitle>
                    <Card.Subtitle className="mb-2">Price: ${price}</Card.Subtitle>
                    <Card.Subtitle className="mb-2">Quantity: {quantity}Pcs</Card.Subtitle>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <button onClick={()=> navigatetoDetail(_id)} className='btn btn-primary d-block w-100'>Manage Inventory</button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default InventoryItem;