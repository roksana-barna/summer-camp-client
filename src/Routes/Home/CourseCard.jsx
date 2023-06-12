import React from 'react';
import useAuth from '../../Hooks/useAuth';

const CourseCard = ({course,handleSelect,isLoggedIn}) => {
    const {name,photoURL,price,seats,instructor}=course;
    const {user}=useAuth();

    return (
        <div className="card card-compact w-96 mt-10 bg-base-100 shadow-xl">
        <figure><img className='h-80 w-80' src={photoURL} alt="Shoes" /></figure>
        <div className="card-body ">
          <h2 className="card-title"><p>Class Name:{name}</p></h2>
          <p> Instructor Name:{instructor}</p>
          <p>Available Seats{seats}</p>
          <p>Price:${price}</p>
          

          <div className="card-actions justify-center bg-pink-200 rounded-xl px-3 py-1 text-slate-800">
           <button
          onClick={() => handleSelect(course)}
        //   disabled={seats === 0 || !user}
        >
          Select
        </button>           </div>
        </div>
      </div>
    );
};

export default CourseCard;