import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import log from '../../assets/images/Login.jpg'

const SignUp = () => {
    const { register, formState: { errors } } = useForm();
    return (
        <div className="hero mx-auto  w-full my-20 ">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col  lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4 skew-y-6' src={log} alt='' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 shadow-slate-800/50">
                    <h1 className="text-2xl text-center font-bold">Sign up</h1>
                    <form className="card-body">
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Name</span></label>
                            <input type="text" {...register("name", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Email</span></label>
                            <input type="email" {...register("email", {
                                required: true
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Password</span></label>
                            <input type="password" {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be 6 characters long" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </div>
                        <input className='btn btn-outline w-full mt-4' value="Sign Up" type="submit" />
                        {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
                    </form>
                    <p className='text-center mb-4'>Already have an account? <Link className='text-black font-bold btn-link' to="/login">Log in</Link> </p>


                </div>
            </div>
        </div >
    );
};

export default SignUp;