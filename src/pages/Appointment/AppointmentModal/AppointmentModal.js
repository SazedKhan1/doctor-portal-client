import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Authcontext } from '../../../context/AuthProvider';

const AppointmentModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name: treatmentName, slots } = treatment
    const date = format(selectedDate, 'PP');
    const { user } = useContext(Authcontext)


    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value
        const name = form.name.value
        const email = form.email.value
        const phone = form.phone.value

        const booking = {
            appointmentDate: date,
            patient: name,
            treatment: treatmentName,
            slot,
            email,
            phone,

        }
        console.log(booking)
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => (res.json()))
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Booking confirmed');
                    refetch()
                }
                else {
                    toast.error(data.message)
                }
            })


    }
    return (
        <>
            <dialog id="booking_modal" className="modal">


                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 mt-10'>
                        <input type="text" value={date} disabled className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {slots?.map((slot, i) => <option

                                key={i}
                                value={slot}>
                                {slot}
                            </option>)}
                        </select>
                        <input type="text" name='name' defaultValue={user?.displayName} disabled placeholder="Your name" className="input input-bordered w-full" />
                        <input type="email" name='email' defaultValue={user?.email} disabled placeholder="Your email address" className="input input-bordered w-full" />
                        <input type="number" name='phone' placeholder="Phone number" className="input input-bordered w-full" />
                        <input className='btn btn-accent' type='submit' value='Submit'></input>
                    </form>
                </div>


            </dialog>

        </>
    );
};

export default AppointmentModal;