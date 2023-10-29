import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutFrom = ({ booking }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, SetCardError] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if (error) {
            console.log(error)
            SetCardError(error.message)
        }
        else {
            SetCardError('')
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement className='w-96'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-success mt-4' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>

            <p className='text-red-600'>{cardError}</p>

        </>
    );
};

export default CheckoutFrom;