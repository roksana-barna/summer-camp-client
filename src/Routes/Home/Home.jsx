import React from 'react';
import { Helmet } from 'react-helmet-async';
import Slider from './Slider/SliderPic';
import Popular from './Popular';
import PopularIns from './PopularIns';
import NewSection from './NewSection';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Smooth Moves|Home</title>
            </Helmet>
            <Slider></Slider>
            <Popular></Popular>
            <NewSection></NewSection>
            <PopularIns></PopularIns>
        </div>
    );
};

export default Home;