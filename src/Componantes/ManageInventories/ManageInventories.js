import React from 'react';
import useInventory from '../../Hooks/DataHook';
import InventoryItem from '../InventoryItem/InventoryItem';
import ManageItems from './ManageItems';

const ManageInventories = () => {
    const [items] = useInventory();
    return (
        <div className=' mt-5'>
            <h2 className='text-center py-5'>Inventories</h2>
            <div className='row gx-0'>
                    {
                        items.map(item => <ManageItems
                            key={item._id}
                            item={item}
                        ></ManageItems>)
                    }
            </div>
        </div>
    );
};

export default ManageInventories;