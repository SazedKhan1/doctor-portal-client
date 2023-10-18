import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Authcontext)
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-spinner text-primary"></span>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;