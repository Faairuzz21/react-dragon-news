import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";

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
            }
        ]
    }
])
export default router