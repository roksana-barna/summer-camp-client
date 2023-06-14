import React from 'react';
import { Helmet } from 'react-helmet-async';
import Slider from './Slider/SliderPic';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Smooth Moves|Home</title>
            </Helmet>
            <Slider></Slider>
        </div>
    );
};

export default Home;