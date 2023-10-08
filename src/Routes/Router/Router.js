import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Main/Layout";
import Login from "../../pages/Login/Login";
import Home from "../../pages/Home/Home";
import Appointment from "../../pages/Appointment/Appointment/Appointment";

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
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    }
]);

export default router