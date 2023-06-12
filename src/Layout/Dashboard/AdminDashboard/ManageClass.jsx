import React, { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/class')
        return res.data;
    })
    const handleMakeApproved = cls => {
        fetch(`http://localhost:5000/class/approved/${cls._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${cls.name} is Approved Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleMakeDenied = cls => {
        fetch(`http://localhost:5000/class/denied/${cls._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${cls.name} is Denied!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Smooth Moves| Manage class</title>
            </Helmet>

            <div className="overflow-x-auto pt-9">
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead>
                        <tr className="text-blue-800">
                            <th>Class Image</th>
                            <th>Class name</th>
                            <th>Instructor</th>
                            <th> Available seats</th>
                            <th>price</th>
                            <th>status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((cls) => <tr key={cls._id}>
                                <td><img className='h-8 w-8 rounded-xl' src={cls.photoURL} alt="" /></td>
                                <td>{cls.name}</td>
                                <td>{cls.instructor}<br />
                                    {cls.email}
                                </td>
                                <td>{cls.seats}</td>
                                <td>${cls.price}</td>
                                <td>
                                    {cls.role === 'approved' ? 'approved' : cls.role === 'denied' ? 'denied' : cls.status}
                                </td>

                                <td><button onClick={() => handleMakeApproved(cls)}
                                    className=" btn bg-sky-400 px-3 py-1 rounded-xl text-white" disabled={cls.role === 'approved'} >Approve</button></td>
                                <td>  <button onClick={() => handleMakeDenied(cls)} className="btn bg-red-400 px-3 rounded-xl text-white"
                                    disabled={cls.role === 'denied'}>Deny</button></td>
                                <td><button className='bg-green-300 py-1 px-3 rounded-xl text-white'><Link to='/dashboard/feedback'> feedback</Link></button></td>
                            </tr>)

                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};


export default ManageClass;