import React from 'react';
import useClass from '../../Hooks/useClass';
import PopularCard from './PopularCard';

const Popular = () => {
    const [classes]=useClass();
    console.log(classes)
    return (
      <div>
        <h2 className='text-4xl mt-10 text-red-400  font-semibold  text-center'>Popular Class</h2>
        <p className='text-2xl font-serif text-sky-300 text-center mt-2'>Create your best Beat</p>
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