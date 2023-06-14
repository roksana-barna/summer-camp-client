import React from 'react';
import { Helmet } from 'react-helmet-async';
import Slider from './Slider/SliderPic';
import Popular from './Popular';
import PopularIns from './PopularIns';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Smooth Moves|Home</title>
            </Helmet>
            <Slider></Slider>
            <Popular></Popular>
            <PopularIns></PopularIns>
        </div>
    );
};

export default Home;