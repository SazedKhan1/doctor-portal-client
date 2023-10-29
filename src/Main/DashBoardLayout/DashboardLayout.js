import React, { useContext } from 'react';
import Navbar from '../../pages/shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { Authcontext } from '../../context/AuthProvider';
import useAdmin from '../../hook/useAdmin';

const DashboardLayout = () => {
    const { user } = useContext(Authcontext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">

                        <li><Link to='/dashboard'>Appointment</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">All users</Link></li>
                                <li><Link to="/dashboard/adddoctor">Add Doctor</Link></li>
                                <li><Link to="/dashboard/manageDoctor">Manage Doctor</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;