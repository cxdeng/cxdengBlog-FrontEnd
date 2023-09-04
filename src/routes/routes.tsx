import { Navigate } from 'react-router-dom'
import Home from "../pages/Home/Home";


const routeTable = [
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: '/',
        element: <Navigate to='/home' />
    }
]

export default routeTable