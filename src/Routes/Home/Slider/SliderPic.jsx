import React from 'react';
import img1 from '../../../assets/11.jpg'
import img2 from '../../../assets/4.jpg'
import img3 from '../../../assets/1.jpg'
import img4 from '../../../assets/2.jpg'

const SliderPic = () => {
  return (
    <div>
       <div className='text-center m-5 '>
       <h2 className='text-5xl text-blue-600'>Create The Best Move For You</h2>

        <h2 className='text-fuchsia-500 mt-2'>WHEN THE DANCER DISAPPEARS, THE DANCE REMAINS...
        </h2>
        <h2 className='text-red-400 text-xl'>LEADING TO THE DANCE OF HEART...
        </h2>
      </div>
      <div className="carousel w-full h-5/6">
        <div id="item1" className="carousel-item w-full">

          <img  src={img1} className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={img2} className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={img3} className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={img4} className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    
    </div>
  );
};

export default SliderPic;
