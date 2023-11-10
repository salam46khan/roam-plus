
import { createBrowserRouter } from 'react-router-dom';
import Roots from '../layout/Roots';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Services/Services';
import Error from '../Pages/Error/Error';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Login/Signup';
import PrivateRouter from './PrivateRouter';
import AddService from '../Pages/AddService/AddService';
import MySchedules from '../Pages/MySchedules/MySchedules';
import MyServices from '../Pages/MyServices/MyServices';

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Roots></Roots>,
        
        children: [
            {
                path: '*',
                element: <Error></Error>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <PrivateRouter><Services></Services></PrivateRouter>
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
                path: '/addservice',
                element: <PrivateRouter><AddService></AddService></PrivateRouter>
            },
            {
                path: '/myschedules',
                element: <MySchedules></MySchedules>
            },
            {
                path: '/myservices',
                element: <MyServices></MyServices>
            }
        ]
    }
])

export default MainRouter;