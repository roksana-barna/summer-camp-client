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
        <li><Link to="/" className='text-xl text-white font-semibold'>Home</Link></li>
        <li><Link to="/instructors" className='text-xl text-white font-semibold'>Instructors</Link></li>
        <li><Link to="/classespage" className='text-xl text-white font-semibold'>Classes</Link></li>
        <li><Link to="/dashboard" className='text-xl text-white font-semibold'>DashBoard</Link></li>
        {
            user ? <>
                <img className='w-10 h-10 rounded-2xl ml-56' src={user.photoURL} alt="" />
                <button onClick={handleLogOut} className="btn ml-5 text-white bg-fuchsia-900">LogOut</button>
            </> : <>
                <li><Link to="/login" className="btn pt-4 text-white bg-fuchsia-900">Login</Link></li>
            </>
        }

    </>
    return (
        <>
            <div className="navbar bg-fuchsia-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <img className='w-10 h-10  ml-2 rounded-2xl' src={logo} alt="" />
                    <a className="btn btn-ghost normal-case text-2xl text-blue-800">Smooth Moves</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>

            </div>
        </>
    );
};

export default Navbar;