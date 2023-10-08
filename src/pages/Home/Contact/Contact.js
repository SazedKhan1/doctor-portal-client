import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        <div className='mt-12 text-center'
            style={{ background: `url(${appointment})` }}>
            <h4 className='text-2xl text-primary'>Contact Us</h4>
            <h4 className='text-4xl text-white'>Stay Connect with us</h4>

            <form>
                <input type="email" placeholder="Your Email;" className="input input-bordered mb-4 p-6 block" />
                <input type="text" placeholder="Subject" className="input input-bordered mb-4 p-6 block" />
                <textarea className="textarea textarea-bordered block" placeholder="Bio"></textarea>
                <input type='submit' name='submit' className='btn btn-primary'></input>
            </form>
        </div>
    );
};

export default Contact;