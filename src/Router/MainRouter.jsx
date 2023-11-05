
import { createBrowserRouter } from 'react-router-dom';
import Roots from '../layout/Roots';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Services/Services';
import Error from '../Pages/Error/Error';

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
            }
        ]
    }
])

export default MainRouter;