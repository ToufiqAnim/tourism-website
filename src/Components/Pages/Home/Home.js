import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Destination from '../Destination/Destination';
import Tours from '../Tours/Tours';

const Home = () => {
    return (
        <div id='home'>
            
            
            <Banner></Banner> 
            <Tours></Tours>
            <Destination></Destination>
        </div>
    );
};

export default Home;