import React from 'react';
import { Link } from 'react-router-dom';
import log from '../../assets/images/Login.jpg'
const Login = () => {
    return (
        <div className="hero  w-full my-20 ">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col  lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4 skew-y-6' src={log} alt='' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 shadow-slate-800/50">
                    <h1 className="text-2xl text-center font-bold">Login</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-ghost btn-outline" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center mb-4'>Don't have an account <Link className='text-black font-bold btn-link' to="/signup">Sign Up</Link> </p>
                    <div className="divider">OR</div>
                    <button className='btn bt-sm btn-outline flex content-center w-3/4 mx-auto mb-10'>CONTINUE WITH GOOGLE</button>

                </div>
            </div>
        </div >
    );
};

export default Login;