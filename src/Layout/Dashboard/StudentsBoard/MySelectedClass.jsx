import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';

const MySelectedClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: enrolled = [], refetch } = useQuery(['enrolled'], async () => {
        const res = await axiosSecure.get('/enrolled')
        return res.data;
    })
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
                            <th>Delete</th>
                            <th>Pay</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolled.map((cls) => <tr key={cls._id}>
                                <td><img className='h-8 w-8 rounded-xl' src={cls.photoURL} alt="" /></td>
                                <td>{cls.className}</td>
                                <td>{cls.instructor}<br />
                                    {cls.email}
                                </td>
                                <td>${cls.price}</td>
                                <td>
                                    <button className=' bg-red-500 px-2 py-2 text-white'>Delete</button>
                                </td>
                                <td>
                                    <button className='bg-fuchsia-600 text-white px-2 py-2 rounded-xl'>Pay</button>
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