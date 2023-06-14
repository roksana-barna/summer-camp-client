import React from 'react';

const PopularCard = ({ popular }) => {
    const { name, photoURL, seats} = popular;
    return (
        <div>
            <div className="card card-compact w-96 mt-10 bg-base-100 shadow-xl">
                <figure><img className='h-80 w-80' src={photoURL} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title"><p>Class Name:{name}</p></h2>
                    <p> Instructor Name:{name}</p>
                    <p>Available Seats:{seats}</p>
                    <div className="card-actions justify-center bg-pink-200 rounded-xl px-3 py-1 text-slate-800">
                        <button >

                        </button>
                    </div>
                </div>
            </div>
            </div>
            );
};

            export default PopularCard;