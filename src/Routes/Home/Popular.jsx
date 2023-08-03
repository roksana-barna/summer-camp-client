import React, { useEffect, useState } from 'react';
import PopularCard from './PopularCard';

const Popular = () => {
   
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        // Fetch the course data from the server
        fetch('https://b7a12-summer-camp-server-side-roksana-barna.vercel.app/class')
            .then(response => response.json())
            .then(data => setPopular(data))
            .catch(error => console.log(error));
    }, []);
    return (
      <div>
        <h2 className='text-4xl mt-10 text-red-400  font-semibold  text-center'>Popular Class</h2>
        <p className='text-2xl font-serif text-sky-300 text-center mt-2'>Create your best Beat</p>
          <div className='grid grid-cols-1 md:grid-cols-3'>
            {
                popular.map(popular=><PopularCard
                   key={popular._id}
                   popular={popular}
                   >

                </PopularCard>)
            }
            
            
        </div>
      </div>
    );
};

export default Popular;