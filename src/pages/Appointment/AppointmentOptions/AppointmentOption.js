import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;
    const handleButtonClick = () => {
        document.getElementById('booking_modal').showModal();
        setTreatment();
    };
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-center text-primary text-xl">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Book Appointment</button>
                    <button className="btn" onClick={() => handleButtonClick()}>open modal</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;