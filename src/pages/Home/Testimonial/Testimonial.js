import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';
const Testimonial = () => {
    const allreviews = [
        {
            id: 1,
            name: 'Akkash Ali ',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            icon: people1,
            address: 'Chor Alexander',
            bgCard: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Bilkis apa',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            icon: people2,
            address: 'Ram Goti',
            bgCard: 'bg-accent'
        },
        {
            id: 3,
            name: 'Jakkash ALi',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            icon: people3,
            address: 'Sonapur',
            bgCard: 'bg-gradient-to-r from-primary to-secondary'
        }]
    return (
        <div className='mt-12'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary'>Testimonial</h4>
                    <h2 className='text-4xl'>What our patients says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt='qoute' />
                </figure>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {allreviews.map(review => <Review key={review.id} review={review}></Review>)}
            </div>
        </div>
    );
};

export default Testimonial;