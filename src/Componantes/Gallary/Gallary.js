import React from 'react';
import './Gallary.css';
var ReactDOM = require('react-dom');
var Coverflow = require('react-coverflow');


const Gallary = () => {

    return (
        <div className='gallary'>
            <Coverflow width="100%" height="350"
                displayQuantityOfSide={2}
                navigation={false}
                enableScroll={true}
                clickable={true}
                active={0}
            >
                
                <img src='https://i.ibb.co/ZVZvwKD/4runner-SR5-Premium.png' alt='4runner-SR5 Premium' />

                <img src='https://i.ibb.co/mHCtryM/4-Runner-TRD-sport.png' alt='4Runner-TRD Sport' />

                <img src='https://i.ibb.co/VLgQZxz/4-Runner-TRD-pro.png' alt='4-Runner-TRD Pro' />

                <img src='https://i.ibb.co/FxbjTjc/Avalon-Hybrid-xsehybridnightshade.png' alt='Avalon - XSE Hybrid Nightshade' />

                <img src='https://i.ibb.co/44K9XJ7/Gr86-premium.png' alt='Gr86-Premium' />

                <img src='https://i.ibb.co/7QTz3qJ/Camry-shey-brid-night-shade.png' alt='Camry-SE Hybrid Nightshade' />

                <img src='https://i.ibb.co/r6986VV/Avalon-Touring.png' alt='Avalon -Touring' />
            </Coverflow>
        </div>
    );
};

export default Gallary;