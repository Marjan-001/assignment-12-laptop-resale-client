import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>

        {
            user?.uid ? <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={handleLogOut}>Sign out</button></li>

            </>
                :
                <li><Link to="/login">Login</Link></li>
        }

    </React.Fragment>
    return (
        <div className="navbar bg-black flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black text-white  rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-transform:uppercase text-white  text-xl">Laptop Swappers</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-white p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </label>
        </div>
    );
};

export default Navbar;