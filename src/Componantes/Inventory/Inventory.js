import React from 'react';
import useInventory from '../../Hooks/DataHook';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const {inventoryId} = useParams();
    return (
        <div className='mt-5'>
            <h2>This is inventory{inventoryId}</h2>
        </div>
    );
};

export default Inventory;