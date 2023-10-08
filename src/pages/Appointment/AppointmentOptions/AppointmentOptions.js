import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import AppointmentModal from '../AppointmentModal/AppointmentModal';

const Treatments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])
    // const [treatment, setTreatment] = useState({})
    useEffect(() => {
        fetch('Treatments.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))

    }, [])
    console.log(appointmentOptions)
    return (
        <div className='mt-12'>
            <h2 className='text-secondary text-center text-2xl font-bold my-4'>Available appointment on {format(selectedDate, 'PP')} </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    appointmentOptions.map(option => <AppointmentOption key={option._id} setTreatment={setAppointmentOptions} appointmentOption={option}></AppointmentOption>)
                }
            </div>




            <AppointmentModal treatment={appointmentOptions}></AppointmentModal>

        </div>
    );
};

export default Treatments;