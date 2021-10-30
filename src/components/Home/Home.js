import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Moments from '../Moments/Moments';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home" >
            <Banner></Banner>
            <Services></Services>
            <Moments></Moments>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;