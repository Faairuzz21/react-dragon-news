import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    { 
        path: '/',
        element: <Roots></Roots>,
        children: [
            { 
                path: '/',
                element:<Home></Home>
            },
            { 
                path: '/login',
                element: <Login></Login>
            },
            { 
                path:'/register',
                element: <Register></Register>
            }
        ]
    }
])
export default router