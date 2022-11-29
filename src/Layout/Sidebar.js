import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';


const Sidebar = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);


    return (
        <div className="drawer-side">
            <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-violet-600 text-white">

                {

                    <li><Link to='/dashboard'>My Orders</Link></li>
                }
                {
                    isAdmin &&

                    <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                }
                {
                    isAdmin &&
                    <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                }
                {isSeller &&
                    <li><Link to={`/dashboard/myproducts/${user.email}`}>My Products</Link></li>
                }
                {isSeller &&
                    <li><Link to='/dashboard/addaproduct'>Add a Product</Link></li>
                }

            </ul>

        </div>

    );
};

export default Sidebar;