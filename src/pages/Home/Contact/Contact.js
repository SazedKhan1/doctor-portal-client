import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        <div className='mt-12 text-center'
            style={{ background: `url(${appointment})` }}>
            <h4 className='text-2xl text-primary'>Contact Us</h4>
            <h4 className='text-4xl text-white'>Stay Connect with us</h4>

            <form className='grid grid-cols-1 gap-3 mx-auto mt-4 mb-3 w-1/2 justify-center'>
                <input type="email" placeholder="Your Email;" className="input input-bordered mb-4 p-6" />
                <input type="text" placeholder="Subject" className="input input-bordered mb-4 p-6" />
                <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>

            </form>
            <input type='submit' name='submit' className='btn btn-primary'></input>
        </div>
    );
};

export default Contact;