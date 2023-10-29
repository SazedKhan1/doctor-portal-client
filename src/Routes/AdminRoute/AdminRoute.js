import React, { useContext } from 'react';
import useAdmin from '../../hook/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../pages/shared/Loading/Loading';
import { Authcontext } from '../../context/AuthProvider';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(Authcontext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation()

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;