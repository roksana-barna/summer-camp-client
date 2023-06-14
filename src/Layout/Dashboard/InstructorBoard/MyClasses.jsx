import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const MyClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })
    const [feedback, setFeedBack] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/feedback')
            .then(res => res.json())
            .then(data => {
                setFeedBack(data)
                console.log(data)
            })
    }, []);
    return (
        <div className="w-full">
            <Helmet>
                <title>Smooth Moves| Myclass</title>
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
                            <th>Total Enrolled</th>
                            <th>feedback</th>
                            <th>update</th>

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
                                <td>{cls.status}</td>
                                <td>
                                    <button>{ }</button>
                                </td>
                                <td>
                                    {
                                        feedback.map(feed => <li key={feed._id}>{feed.feedback}</li>)
                                    }
                                </td>
                                <td>
                                    <button className='px-2 py-1 bg-sky-300 text-white'>update</button>
                                </td>
                            </tr>)

                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyClasses;