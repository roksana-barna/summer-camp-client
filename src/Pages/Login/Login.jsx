import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginimg from '../../assets/cd6a2b40e53ebc601cf870bc1e89506e.jpg'
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';


const Login = () => {
    const [show, setShow] = useState(false)
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {

        signIn(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });


            })
    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content mt-10 flex-col lg:flex-row-reverse">
                    <div className="">
                        <img className='' src={loginimg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? "text" : "password"} {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                })} placeholder="password" className="input input-bordered" />
                                <p onClick={() => setShow(!show)}>
                                    <small>
                                        {
                                            show ? <span className='ml-4 mt-2 text-blue-700'><FaRegEye></FaRegEye></span> : <span className='ml-4 mt-2 text-blue-700'><FaEyeSlash></FaEyeSlash></span>

                                        }

                                    </small>
                                </p>
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase,One Special Character</p>}

                            </div>

                            <div className="form-control mt-6">
                                <input className="btn bg-fuchsia-600 text-white" type="submit" value="Login" />
                            </div>
                            <SocialLogin></SocialLogin>
                        </form>
                        <p className='mb-6'><small className='text-blue-900 pl-8'>New to Smooth Moves??Please <button className='bg-fuchsia-500 text-white px-4 py-1 rounded-2xl'><Link to="/register">Register</Link></button></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;