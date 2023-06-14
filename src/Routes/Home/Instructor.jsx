import React, { useEffect, useState } from 'react';
import InstructorCard from './InstructorCard';
import PopularInsCard from './PopularInsCard';

const Instructor = () => {
    const [ins, setIns] = useState([]);

    useEffect(() => {
        // Fetch the course data from the server
        fetch('https://b7a12-summer-camp-server-side-roksana-barna.vercel.app/instructors')
            .then(response => response.json())
            .then(data => setIns(data))
            .catch(error => console.log(error));
    }, []);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
            {
                ins?.map(instruct=><InstructorCard
                    key={instruct._id}
                    instruct={instruct}

                    >
                </InstructorCard>)
            }
            
        </div>
    );
};

export default Instructor;

