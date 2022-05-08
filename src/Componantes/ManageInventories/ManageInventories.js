import React from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../Hooks/DataHook';
import ManageItems from './ManageItems';

const ManageInventories = () => {
    const [items, setItem] = useInventory();
    const handleDelet=(id)=>{
        const proceed = window.confirm("Are you sure you want to delete?");
        if(proceed){
            const url = `https://enigmatic-headland-48112.herokuapp.com/product/${id}`;
            fetch(url,{
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount>0){
                    const remaining = items.filter(item => item._id !== id);
                    setItem(remaining);

                }
            })
        }
        
    }
    return (
        <div className=' mt-5'>
            <h2 className='text-center py-5'>Inventories</h2>
            <div className='row gx-0'>
                    {
                        items.map(item => <ManageItems
                            key={item._id}
                            item={item}
                            handleDelet={handleDelet}
                        ></ManageItems>)
                    }
            </div>
            <div className='text-center my-2'>
                <Link to="/additem" className='btn btn-success text-center mx-auto '>Add Item</Link>
            </div>
        </div>
    );
};

export default ManageInventories;