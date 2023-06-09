import React from 'react';
import { FaHome, FaPeopleArrows } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-orange-200">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-orange-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><NavLink className='bg-red-400 text-center text-white'>Admin</NavLink></li>
                        <li><NavLink to='/dashboard/manageclass' className='text-cyan-800 text-lg  bg-transparent hover:bg-red-400'>Manage Classes</NavLink></li>
                        <li><NavLink to='/dashboard/manageuser' className='text-cyan-800 text-lg bg-transparent hover:bg-red-400 '>Manage Users</NavLink></li>
                        {/* students */}
                        <li><NavLink className='bg-red-400 text-center text-white'>Students</NavLink></li>
                        <li><NavLink to='/dashboard/myselectedclass' className='text-cyan-800 text-lg  bg-transparent hover:bg-red-400'>My Selected Classes</NavLink></li>
                        <li><NavLink to='/dashboard/myenrolledclass' className='text-cyan-800 text-lg bg-transparent hover:bg-red-400 '>My Enrolled Classes</NavLink></li>
                        {/* instructor */}
                        <li><NavLink className='bg-red-400 text-center text-white'>Instructor</NavLink></li>
                        <li><NavLink to='/dashboard/addaclass' className='text-cyan-800 text-lg  bg-transparent hover:bg-red-400'>Add a Class</NavLink></li>
                        <li><NavLink to='/dashboard/myclass' className='text-cyan-800 text-lg bg-transparent hover:bg-red-400 '>My Classes</NavLink></li>
                        <li><NavLink to='/dashboard/totalclass' className='text-cyan-800 text-lg bg-transparent hover:bg-red-400 '>Total Enrolled Class</NavLink></li>
                        <li><NavLink to='/dashboard/feedback' className='text-cyan-800 text-lg bg-transparent hover:bg-red-400 '>FeedBack</NavLink></li>

                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                        <li><NavLink to="/classes"><FaPeopleArrows></FaPeopleArrows>Classes</NavLink></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;