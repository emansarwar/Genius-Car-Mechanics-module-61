import React from 'react';

import NextTrip from '../../NextTrip/NextTrip';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <NextTrip></NextTrip>
        </div>
    );
};

export default Home;