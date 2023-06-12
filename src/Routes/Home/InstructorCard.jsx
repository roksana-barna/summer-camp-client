import React from 'react';

const InstructorCard = ({ instruct }) => {
    const {photoURL,name,email}=instruct;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='h-80 w-80' src={photoURL}alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <p>{email}</p>
                    <div className="card-actions justify-center">
                        <button className=" bg-orange-400 px-3 py-2  text-white rounded-xl">About Class</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;