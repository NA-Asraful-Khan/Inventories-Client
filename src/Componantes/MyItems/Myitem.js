import React from 'react';
import { Card } from 'react-bootstrap';

const Myitem = ({ item,handleDelet }) => {
    const { _id, quantity, carName, company, price, description, picture,email } = item;
   
    return (
        <div className='container col-12 col-md-6 col-lg-4 d-flex justify-content-center my-2'>
            <Card className='py-2 shadow-lg card-width'>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>Model: {carName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Brand: {company}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Email: {email}</Card.Subtitle>
                    <Card.Subtitle className="mb-2">Price: ${price}</Card.Subtitle>
                    <Card.Subtitle className="mb-2">Quantity: {quantity}Pcs</Card.Subtitle>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-center ">
                <button onClick={()=> handleDelet(_id)} className='btn btn-danger d-block m-2'>Delete Item</button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Myitem;