import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const InventoryItem = ({ item }) => {
    const { _id, quantity, carName, company, price, description, picture } = item;
    return (
        <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center my-2'>
            <Card className='p-2 shadow-lg' style={{ width: '18rem' }}>
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
                    <Link to="/inventory" className='btn btn-primary d-block w-100'>Manage Inventory</Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default InventoryItem;