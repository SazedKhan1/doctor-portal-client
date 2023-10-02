import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Main/Layout";
import Login from "../../pages/Login/Login";
import Home from "../../pages/Home/Home";

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
            }
        ]
    }
]);

export default router