import React from 'react';

const Review = ({ review }) => {

    const { name, comment, icon, address } = review;
    return (
        <div className="card shadow-xl">
            <div className="card-body">

                <p>{comment}</p>
                <div className="flex items-center mt-2">
                    <div className="avatar">
                        <div className=" w-16 rounded-full ring ring-primary">
                            <img src={icon} alt='people' />
                        </div>
                    </div>
                    <div className='mx-3' >
                        <h4>{name}</h4>
                        <h4>{address}</h4>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Review;