import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import location from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
    const allcards = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'open from 9am to 6pm',
            icon: clock,
            bgCard: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Visit Our Location',
            description: 'Hospital Road Maijdi Noakhali',
            icon: location,
            bgCard: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us Now',
            description: '01317641992/01846309679',
            icon: phone,
            bgCard: 'bg-gradient-to-r from-primary to-secondary'
        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
            {allcards.map(card => <InfoCard
                key={card.id}
                card={card}
            >

            </InfoCard>)}
        </div>
    );
};

export default InfoCards;