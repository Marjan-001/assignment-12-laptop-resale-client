// import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
// import { AuthContext } from '../contexts/AuthProvider';
// import useBuyer from '../Pages/hooks/useBuyer';
import Navbar from '../Shared/Navbar/Navbar';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
    // const { user } = useContext(AuthContext)
    const [roles, setRoles] = useState('')
    useEffect(() => {


        fetch(`http://localhost:5000/users`)

            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRoles(data)
            })
    }, [])
    console.log(roles)

    // const url = `http://localhost:5000/users`;

    // const { data: users = [] } = useQuery({
    //     queryKey: ['role', user?.role],
    //     queryFn: async () => {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         return data;
    //     }
    // })


    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>


                </div>
                {
                    roles?.length && roles?.map(role => <Sidebar role={role}></Sidebar>)
                }


            </div>
        </div>
    );
};

export default DashboardLayout;