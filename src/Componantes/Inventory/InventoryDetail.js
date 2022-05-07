import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [items, setItem] = useState([]);

    useEffect(() => {
        fetch(`data.json`)
            .then(response => response.json())
            .then(data => setItem(data));

    }, []);
    return (
        <div>
            <div className='mt-5'>
                <h2>This is inventory{inventoryId}{items.length}</h2>
            </div>
        </div>
    );
};

export default InventoryDetail;