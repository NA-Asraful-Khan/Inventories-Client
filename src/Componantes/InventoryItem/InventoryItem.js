import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';

const InventoryItem = ({ item }) => {
    const { _id, quantity, carName, company, price, description, picture } = item;
    return (
        <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center my-2'>
            <Card className='p-2 shadow-lg' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{carName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{company}</Card.Subtitle>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <button className='btn btn-primary'>Manage Inventory</button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default InventoryItem;