import React from 'react';
import { JackInTheBox } from "react-awesome-reveal";


const PopularInsCard = ({ ins }) => {
    const { name, instructor, email,photoURL} = ins;
    return (
        <div>
            <JackInTheBox>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                <figure><img className='h-20 w-20 rounded-xl' src={photoURL} alt="" /></figure>

                    <h2 className="card-title">{name}</h2>
                    <p>{instructor}</p>
                    <p>{email}</p>
                </div>
            </div>
            </JackInTheBox>
        </div>
    );
};

export default PopularInsCard;