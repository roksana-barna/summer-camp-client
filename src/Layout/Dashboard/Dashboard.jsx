import React from 'react';
import { FaClipboard, FaHome, FaPeopleArrows,FaOdnoklassniki,FaDesktop,FaCheck,FaFan } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';
import useAuth from '../../Hooks/useAuth';
import useStudent from '../../Hooks/useStudent';

const Dashboard = () => {
    const [isAdmin] = useAdmin();

    const [isInstructor] = useInstructor();
    const [isStudent] = useStudent();
    return (
        <div>
            <Helmet>
                <title>Smooth Moves|Dashboard</title>
            </Helmet>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-orange-200">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 h-full bg-orange-200 text-base-content">
                        {
                            isAdmin &&
                            <>
                                <li><NavLink to='/dashboard/studentrole' className='bg-red-400 text-center text-white'>Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/manageclass' className='text-cyan-800 text-lg  bg-transparent hover:bg-red-400'><FaDesktop></FaDesktop>Manage Classes</NavLink></li>
                                <li><NavLink to='/dashboard/manageuser' className='text-cyan-800 text-lg bg-transparent hover:bg-red-400 '><FaOdnoklassniki></FaOdnoklassniki>Manage Users</NavLink></li>
                            </>

                        }
                        {
                           isStudent &&  
                            <>
                            <li><NavLink className='bg-red-400 text-center text-white'>Students Home</NavLink></li>
                            <li><NavLink to='/dashboard/myselectedclass' className='text-cyan-800 text-lg  bg-transparent hover:bg-red-400'><FaCheck></FaCheck>My Selected Classes</NavLink></li>
                            <li><NavLink to='/dashboard/myenrolledclass' className='text-cyan-800 text-lg bg-transparent hover:bg-red-400 '><FaFan></FaFan>My Enrolled Classes</NavLink></li>

                        </>
                        }
                        
                        {
                            isInstructor &&
                            <>
                                <li><NavLink   className='bg-red-400 text-center text-white'>Instructor Home</NavLink></li>
                                <li><NavLink to='/dashboard/addaclass' className='text-cyan-800 text-lg  bg-transparent hover:bg-red-400'><FaClipboard></FaClipboard>Add a Class</NavLink></li>
                                <li><NavLink to='/dashboard/myclasses' className='text-cyan-800 text-lg bg-transparent hover:bg-red-400 '><FaPeopleArrows></FaPeopleArrows>My Classes</NavLink></li>
                            </>
                        }
                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                        <li><NavLink to="/classespage"><FaPeopleArrows></FaPeopleArrows>Classes</NavLink></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;