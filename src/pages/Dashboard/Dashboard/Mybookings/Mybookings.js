import React from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../../../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const Mybookings = () => {
    const { user } = useContext(Authcontext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className="overflow-x-auto">
            <h3 className='text-3xl mb-4 text-center'>My appointment</h3>
            <table className="table">
                <thead className='bg-slate-300'>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Service</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Payment Status</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings?.map((booking, i) => <tr key={booking._id}>
                        <th>{i + 1}</th>
                        <td>{booking.patient}</td>
                        <td>{booking.treatment}</td>
                        <td>{booking.appointmentDate}</td>
                        <td>{booking.slot}</td>
                        <td>
                            {
                                booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className=' btn btn-xs btn-primary'>Pay</button></Link>
                            }
                            {
                                booking.price && booking.paid && <span className='text-success'>Paid</span>
                            }
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default Mybookings;