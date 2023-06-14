import React from 'react';
import useClass from '../../Hooks/useClass';
import PopularCard from './PopularCard';

const Popular = () => {
    const [classes]=useClass();
    console.log(classes)
    return (
      <div>
        <h2 className='text-2xl text-sky-400 font-bold text-center my-8'>Popular Class</h2>
        <p className='text-xl text-sky-800 font-bold text-center my-4'>Create your best Beat</p>
          <div className='grid grid-cols-1 md:grid-cols-3'>
            {
                classes.map(popular=><PopularCard
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