
import { createBrowserRouter } from 'react-router-dom';
import Roots from '../layout/Roots';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Services/Services';
import Error from '../Pages/Error/Error';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Login/Signup';

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
                element: <Services></Services>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    }
])

export default MainRouter;