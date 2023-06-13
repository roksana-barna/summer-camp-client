import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';
// import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider';

const MySelectedClass = () => {
    const [axiosSecure]=useAxiosSecure();
    const {user}=useContext(AuthContext);
    const email=user.email;
    
    // const { data: enrolled = [], refetch } = useQuery(['enrolled'], async () => {
    //     const res = await axiosSecure.get('/enrolled')
    //     return res.data;
    // })
    const [enrolleds, setEnrolleds] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/enrolled/selected/${email}`)
            .then(res => res.json())
            .then(data => {
                setEnrolleds(data)
                console.log(data)
            })
        },[email]);

    const handleDelete = cls => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {

                    axiosSecure.delete(`/enrolled/selected/${cls._id}`)
                        .then(res => {
                            console.log('deleted res', res.data);
                            if (res.data.deletedCount > 0) {
                                // refetch();
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                            }
                        })

                }
            })
    }

    return (
        <div className="w-full">

            <Helmet>
                <title>Smooth Moves| My selected class</title>
            </Helmet>

            <div className="overflow-x-auto pt-9">
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead>
                        <tr className="text-blue-800">
                            <th>Class Image</th>
                            <th>Class name</th>
                            <th>Instructor</th>
                            <th>price</th>
                            <th>seats</th>
                            <th>Delete</th>
                            <th>Pay</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolleds?.map((cls) => <tr key={cls._id}>
                        
                                <td><img className='h-8 w-8 rounded-xl' src={cls.photoURL} alt="" /></td>
                                <td>{cls.className}</td>
                                <td>{cls.instructor}<br />
                                    {cls.email}
                                </td>
                                <td>${cls.price}</td>
                                <td>{cls.seats}</td>
                                <td>
                                    <button onClick={() => handleDelete(cls)} className=' bg-red-500 px-2 py-2 text-white'>Delete</button>
                                </td>
                                <td>
                                    <button className='bg-fuchsia-600 text-white px-2 py-2 rounded-xl'><Link to='/dashboard/payment'>Pay</Link></button>
                                </td>

                            </tr>)

                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;