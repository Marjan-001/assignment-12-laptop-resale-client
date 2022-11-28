import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {


    return (
        <div className="drawer-side">
            <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-violet-600 text-white">

                {

                    <li><Link to='/dashboard'>My Orders</Link></li>
                }
                {

                    <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                }
                {
                    <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                }
            </ul>

        </div>

    );
};

export default Sidebar;