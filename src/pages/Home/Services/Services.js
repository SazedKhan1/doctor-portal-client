import React from 'react';
import Fluoride from '../../../assets/images/fluoride.png'
import Cavity from '../../../assets/images/cavity.png'
import Teeth from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const allServices = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Fluoride is a natural mineral that builds strong teeth and prevents cavities. It’s been an essential oral health treatment for decades. Fluoride supports healthy tooth enamel and fights the bacteria that harm teeth and gums. Tooth enamel is the outer protective layer of each tooth.',
            icon: Fluoride,
            bgCard: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Cavities are decayed areas of your teeth that develop into tiny openings or holes. The three types of cavities are shown here. Smooth surface cavities occur on the smooth sides of your teeth, while root cavities develop on the surface over the roots. Pit and fissure cavities occur on the chewing surface of your teeth.',
            icon: Cavity,
            bgCard: 'bg-accent'
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Whitening may be the right choice for you. LASER DENTAL is committed to providing every patient with a bright and radiant smile that can completely transform their whole facial aesthetic. ',
            icon: Teeth,
            bgCard: 'bg-gradient-to-r from-primary to-secondary'
        }
    ]
    return (
        <div className='mt-12'>
            <div className='text-center'>
                <h2 className='text-xl text-primary'>Our Services</h2>
                <h2 className='text-3xl'>Services we provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>

                {
                    allServices.map(service => <Service key={service.id} service={service}> </Service>)
                }
            </div>
        </div>
    );
};

export default Services;