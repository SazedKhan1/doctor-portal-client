import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutFrom from './CheckoutFrom';


const stripePromise = loadStripe(process.env.REACT_APP_StripeKey);

const Payment = () => {
    const booking = useLoaderData();
    const { price, treatment, appointmentDate, slot } = booking

    return (
        <div>
            <h4> Payment for {treatment}</h4>
            <h4>pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</h4>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutFrom booking={booking}></CheckoutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;