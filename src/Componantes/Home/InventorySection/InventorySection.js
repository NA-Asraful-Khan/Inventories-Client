import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../../Hooks/DataHook';
import InventoryItem from '../../InventoryItem/InventoryItem';
import './InventorySection.css';

const InventorySection = () => {

    const [items, setItem] = useInventory();
    return (
        <div>
            <h2 className='text-center py-5'>Inventories</h2>
            <div className='row gx-0'>
                {
                    items.slice(0, 6).map(item => <InventoryItem
                        key={item._id}
                        item={item}
                    ></InventoryItem>)
                }
            </div>
            <div className='text-center my-2'>
                <Link to="/inventory" className='btn btn-danger text-center mx-auto '>Manage Inventory</Link>
            </div>
        </div>
    );
};

export default InventorySection;