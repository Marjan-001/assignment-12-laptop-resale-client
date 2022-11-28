import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const Payment = () => {

    const booking = useLoaderData();
    const navigation = useNavigation();
    const stripePromise = loadStripe(process.env.REACT_APP_stripe_key)
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl mt-8 text-center border border-purple-800 text-black'> Payment for {booking.book_product} laptop</h2>
            <h2 className='text-2xl text-center border border-purple-800 text-black'> Pay ${booking.resale_price} for your product.</h2>
            <div className='w-96 mx-12 border border-purple-900 p-14 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;