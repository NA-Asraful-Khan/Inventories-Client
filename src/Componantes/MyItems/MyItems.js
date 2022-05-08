import React, { useEffect, useState } from 'react';
import useInventory from '../../Hooks/DataHook';
import useMyItem from '../../Hooks/useMyItem';
import Myitem from './Myitem';

const MyItems = () => {
    const [items, setItem] = useInventory();
    const [myItem, setMyItem] = useMyItem();
    const handleDelet = (id , name) => {
        const proceed = window.confirm("Are you sure you want to delet?");
        if (proceed) {
            const url = `http://localhost:5000/myProducts/${id}`;
            const urll = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log(data);
                        const remaining = myItem.filter(item => item._id !== id);
                        setMyItem(remaining);

                    }
                })

            fetch(urll, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log(data);
                        const remaining = items.filter(item => item._id !== id);
                        setItem(remaining);

                    }
                })
        }

    }
    return (
        <div className=' mt-5'>
            <h2 className='text-center py-5'>My Item</h2>
            <div className='row gx-0'>

                {
                    myItem.map(item => <Myitem
                        key={item._id}
                        item={item}
                        handleDelet={handleDelet}
                    ></Myitem>)
                }
            </div>
        </div>
    );
};

export default MyItems;