import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <section className='mt-12'

            style={{ background: `url(${appointment})` }}>
            <div className="hero text-white">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className=" hidden md:block -mt-48 w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h3 className='text-primary'>Appointment</h3>
                        <h1 className="text-5xl font-bold">Make Appointment</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;