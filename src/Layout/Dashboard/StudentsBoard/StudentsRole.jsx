import React from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const StudentsRole = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const handleMakeStudents = user => {
        fetch(`https://b7a12-summer-camp-server-side-roksana-barna.vercel.app/users/student/${user._id}`, {
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
                        title: `${user.name} is an student Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>

            {
                users.map((user) => <p key={user._id}>

                    <div>
                        {
                            user.role === 'student' ? 'student' : ''

                        }
                    </div>
                    <button onClick={() => handleMakeStudents(user)} className="btn  bg-red-400  text-white"
                       >Make students</button>

                </p>)
            }
        </div>
    );
};

export default StudentsRole;