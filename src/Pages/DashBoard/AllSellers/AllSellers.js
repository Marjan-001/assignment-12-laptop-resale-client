import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {



    const { data: sellers = [], refetch } = useQuery({

        queryKey: ['sellers'],
        queryFn: async () => {

            const res = await fetch('https://assignment-12-laptop-resale-server.vercel.app/sellers');
            const data = await res.json();
            return data;
        }
    });
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this seller');
        if (proceed) {
            fetch(`https://assignment-12-laptop-resale-server.vercel.app/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    alert('deleted successfully');
                    refetch()

                })
        }
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellers.map((seller, i) =>
                                <tr>
                                    <th>{i + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td><button onClick={() => handleDelete(seller._id)} className='btn btn-sm btn-ghost'>Delete</button></td>
                                </tr>

                            )


                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;