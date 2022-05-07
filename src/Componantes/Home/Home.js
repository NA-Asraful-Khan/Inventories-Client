import React from 'react';
import InventorySection from './InventorySection/InventorySection';

const Home = () => {
    return (
        <div>
            <img
                className="d-block w-100"
                src="https://i.ibb.co/56Dtj7N/car-banner-1.jpg"
                alt="First slide"
            />
            <div className='container'>
                <InventorySection></InventorySection>
            </div>
        </div>
    );
};

export default Home;