import React from 'react';
import useInventory from '../../Hooks/DataHook';
import InventoryItem from '../InventoryItem/InventoryItem';

const ManageInventories = () => {
    const [items, setItem] = useInventory();
    return (
        <div className=' mt-5'>
            <h2 className='text-center py-5'>Inventories</h2>
            <div className='row gx-0'>
                    {
                        items.map(item => <InventoryItem
                            key={item._id}
                            item={item}
                        ></InventoryItem>)
                    }
            </div>
        </div>
    );
};

export default ManageInventories;