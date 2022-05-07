import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { serviceId } = useParams();
    return (
        <div className='mt-5'>
            <h2>This is inventory</h2>
        </div>
    );
};

export default Inventory;