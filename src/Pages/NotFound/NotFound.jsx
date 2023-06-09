import React from 'react';
import error from"../../assets/post_thumbnail-77d8f2a95f2f41b5863f3fba5a261d7e.jpeg.webp"
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className='text-center '>
            <button className=' text-center m-5 bg-emerald-600 px-8 py-2 text-white '> <Link to='/'> Back To Home</Link></button>
            <img  src={error} alt="" />
            
        </div>
    );
};

export default NotFound;