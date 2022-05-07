import React, { useEffect, useState } from 'react';
import useInventory from '../../../Hooks/DataHook';
import InventoryItem from '../../InventoryItem/InventoryItem';

const InventorySection = () => {

    const [items, setItem] = useInventory();


    
    return (
        <div>
            <h2 className='text-center py-5'>Inventories</h2>
            <div className='row'>
                    {
                        items.slice(0,6).map(item => <InventoryItem
                            key={item._id}
                            item={item}
                        ></InventoryItem>)
                    }
            </div>
        </div>
    );
};

export default InventorySection;