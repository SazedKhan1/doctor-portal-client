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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
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
        children: [
            {
                path: '/dashboard',
                element: <Mybookings></Mybookings>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            }
        ]
    }

]);

export default router