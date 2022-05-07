import React, { useEffect, useState } from 'react';
import InventoryItem from '../../InventoryItem/InventoryItem';

const InventorySection = () => {
    const [items, setItem] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setItem(data));
    }, []);
    return (
        <div>
            <h2 className='text-center py-5'>Inventories</h2>
            <div className='row'>
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

export default InventorySection;