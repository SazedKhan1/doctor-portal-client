import React from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../../../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const Mybookings = () => {
    const { user } = useContext(Authcontext)
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    const { data: bookings = [], } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: () => fetch(url, {
            headers: { authorization: `bearar ${localStorage.getItem('accessToken')}` }
        })
            .then(res => res.json())
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
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking, i) => <tr key={booking._id}>
                        <th>{i + 1}</th>
                        <td>{booking.patient}</td>
                        <td>{booking.treatment}</td>
                        <td>{booking.appointmentDate}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default Mybookings;