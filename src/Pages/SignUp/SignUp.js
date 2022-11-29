import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import log from '../../assets/images/Login.jpg'
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('')

    const navigate = useNavigate();

    const handleSignUp = (data) => {
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name

                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role)

                    })
                    .catch(err => console.log(err));
            })

            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });

        const saveUser = (name, email, role) => {

            const user = {
                name,
                email,
                role
            }
            console.log(user)
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    navigate('/');
                })
        }


    }
    return (
        <div className="hero mx-auto  w-full my-20 ">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col  lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4 skew-y-6' src={log} alt='' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 shadow-slate-800/50">
                    <h1 className="text-2xl text-center font-bold">Sign up</h1>
                    <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Name in lowercase</span></label>
                            <input type="text" {...register("name", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Email in lowercase</span></label>
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
                            <select
                                {...register('role')}
                                className="select select-ghost mt-2 w-full max-w-xs">
                                <option disabled selected>Select your account type</option>
                                <option value='seller' >seller</option>
                                <option value='buyer' >buyer</option>


                            </select>
                        </div>
                        <input className='btn btn-outline w-full mt-4' value="Sign Up" type="submit" />
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </form>
                    <p className='text-center mb-4'>Already have an account? <Link className='text-black font-bold btn-link' to="/login">Log in</Link> </p>


                </div>
            </div>
        </div >
    );
};

export default SignUp;