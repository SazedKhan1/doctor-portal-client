import React from 'react';

const AppointmentModal = ({ treatment }) => {


    return (
        <>
            <dialog id="booking_modal" className="modal">
                {
                    treatment && treatment.map(data => (
                        <div className="modal-box" key={data._id}>
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">{data.name}</h3>
                            <p className="py-4">Press ESC key or click on ✕ button to close</p>
                        </div>
                    ))
                }
            </dialog>

        </>
    );
};

export default AppointmentModal;