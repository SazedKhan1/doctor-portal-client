import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Main/Layout";
import Login from "../../pages/Login/Login";
import Home from "../../pages/Home/Home";
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import Signup from "../../pages/Signup/Signup";
import PrivateRoute from "../PrivateRouter/PrivateRoute";
import DashboardLayout from "../../Main/DashBoardLayout/DashboardLayout";
import Mybookings from "../../pages/Dashboard/Dashboard/Mybookings/Mybookings";
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddDoctor from "../../pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctor from "../../pages/Dashboard/ManageDoctor/ManageDoctor";
import Payment from "../../pages/Payment/Payment";
import DisplayError from "../../pages/shared/DisplayError/DisplayError";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <Mybookings></Mybookings>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
            ,
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            }
            ,
            {
                path: '/dashboard/manageDoctor',
                element: <AdminRoute><ManageDoctor></ManageDoctor></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoute><Payment></Payment></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }
        ]
    }

]);

export default router