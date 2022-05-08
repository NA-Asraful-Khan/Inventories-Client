import React from 'react';
import AboutCompany from '../AboutCompany/AboutCompany';
import Gallary from '../Gallary/Gallary';
import InventorySection from './InventorySection/InventorySection';

const Home = () => {
    
    return (
        <div>
            <img
                className="d-block w-100 mt-5"
                src="https://i.ibb.co/56Dtj7N/car-banner-1.jpg"
                alt="First slide"
            />
            <div className='container'>
                <InventorySection></InventorySection>
            </div>
            <Gallary></Gallary>

            <div className="container">
                <AboutCompany></AboutCompany>
            </div>
        </div>
    );
};

export default Home;