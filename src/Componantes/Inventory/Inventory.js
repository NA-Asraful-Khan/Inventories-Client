import React from 'react';
import useInventory from '../../Hooks/DataHook';
import { Link, useParams } from 'react-router-dom';

const Inventory = () => {
    const {inventoryId} = useParams();
    const [items, setItem] = useInventory();
    console.log(items)
    return (
        <div className='mt-5'>
            <h2>This is inventory{inventoryId}--{items.length}</h2>
            <div className='text-center my-2'>
                <Link to="/inventory" className='btn btn-danger text-center mx-auto '>Manage Inventory</Link>
            </div>
        </div>
    );
};

export default Inventory;