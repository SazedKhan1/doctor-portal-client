import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { Authcontext } from '../../../context/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(Authcontext)
    const error = useRouteError();
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .then(err => console.error(err))
    }
    return (
        <div>
            <p className='text-red-500'>Something went wrong!!!</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h4 className='text-2xl'> To fixed this problem!!  please <button className='btn btn-outline' onClick={handleLogOut}>SignOut</button> and log in back </h4>
        </div>
    );
};

export default DisplayError;