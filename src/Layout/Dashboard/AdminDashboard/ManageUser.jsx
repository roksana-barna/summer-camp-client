import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const ManageUser = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const handleMakeAdmin = user => {
        fetch(`https://b7a12-summer-camp-server-side-roksana-barna.vercel.app/users/admin/${user._id}`, {
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
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleMakeInstructor = user => {
        fetch(`https://b7a12-summer-camp-server-side-roksana-barna.vercel.app/users/instructor/${user._id}`, {
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
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Smooth Moves| Manage users</title>
            </Helmet>

            <div className="overflow-x-auto pt-9">
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead>
                        <tr className="text-blue-800">
                            <th>Name</th>
                            <th>Email</th>
                            <th> Current Role</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>

                                    {
                                        user.role === 'admin' ? 'admin' : user.role === 'instructor' ? 'instructor' : user.role === 'student' ? 'student' : 'student'

                                    }

                                </td>
                                <td><button onClick={() => handleMakeAdmin(user)}
                                    className="btn  bg-sky-400  text-white" disabled={user.role === 'admin'}

                                >Make Admin</button></td>
                                <td>  <button onClick={() => handleMakeInstructor(user)} className="btn  bg-red-400  text-white"
                                    disabled={user.role === 'instructor'}>Make Instructor</button></td>

                            </tr>)

                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageUser;