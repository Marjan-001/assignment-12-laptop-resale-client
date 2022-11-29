import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `https://assignment-12-laptop-resale-server.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h2 className="text-3xl mb-2 font-bold  text-black text-center">My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead >
                        <tr>
                            <th></th>
                            <th>Product-Image</th>
                            <th>Product-Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.length &&
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td><img className="mask mask-square w-24" src={booking.image} alt='' /></td>
                                <td>{booking?.book_product}</td>
                                <td>{booking?.resale_price}</td>
                                <td>{
                                    booking.resale_price && !booking.paid &&

                                    <Link to={`/dashboard/payment/${booking._id}`}> <button className='btn btn-primary btn-square'>Pay</button></Link>

                                }
                                    {
                                        booking.resale_price && booking.paid &&

                                        <button className='btn btn-success btn-square'>Paid</button>
                                    }

                                </td>
                                <td><button className='btn btn-ghost'>Cancel</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;