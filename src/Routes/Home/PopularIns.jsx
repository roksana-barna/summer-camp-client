import React, { useEffect, useState } from 'react';
import PopularInsCard from './PopularInsCard';

const PopularIns = () => {
    
    const [inst, setInst] = useState([]);

    useEffect(() => {
        // Fetch the course data from the server
        fetch('https://b7a12-summer-camp-server-side-roksana-barna.vercel.app/instructors')
            .then(response => response.json())
            .then(data => setInst(data))
            .catch(error => console.log(error));
    }, []);
    return (
        <div>
            <h2 className='text-2xl text-sky-400 font-bold text-center mt-8 '> Our Popular Instructor</h2>
        <p className='text-xl text-sky-800 font-bold text-center my-2'>Be the HighLight With Beat...</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-10'>
            {
                inst?.map(ins=><PopularInsCard
                    key={ins._id}
                    ins={ins}

                    >
                </PopularInsCard>)
            }
            
        </div>
        </div>
    );
};

export default PopularIns;