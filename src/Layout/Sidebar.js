import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ role }) => {
    return (
        <div className="drawer-side">
            <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-violet-600 text-white">

                {
                    role.role === 'buyer' &&
                    <li><Link to='/dashboard'>My Orders</Link></li>
                }

            </ul>

        </div>
    );
};

export default Sidebar;