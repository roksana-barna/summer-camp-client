import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images.jfif'
import { AuthContext } from '../../AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const navItems = <>
        <li><Link to="/" className='text-xl text-fuchsia-700 font-semibold'>Home</Link></li>
        <li><Link to="/instructors" className='text-xl text-fuchsia-700 font-semibold'>Instructors</Link></li>
        <li><Link to="/classes" className='text-xl text-fuchsia-700 font-semibold'>Classes</Link></li>
        <li><Link to="/dashboard" className='text-xl text-fuchsia-700 font-semibold'>DashBoard</Link></li>
        {
            user ? <>
                <img className='w-10 h-10 rounded-2xl ml-20' src={user.photoURL} alt="" />
                <button onClick={handleLogOut} className="btn ml-5 text-white bg-fuchsia-900">LogOut</button>
            </> : <>
                <li><Link  to="/login" className="btn pt-4 text-white bg-fuchsia-900">Login</Link></li>
            </>
        }

    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <img className='w-10 h-10 rounded-2xl' src={logo} alt="" />

                    <a className="btn btn-ghost normal-case text-2xl text-fuchsia-800">Smooth Moves</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </>
    );
};

export default Navbar;