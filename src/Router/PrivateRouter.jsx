import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import PropTypes from "prop-types";

import 'ldrs/ring'
import { quantum } from 'ldrs'
quantum.register('l-quantum')


const PrivateRouter = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    if (loader) {
        return <div className="h-screen dark:bg-slate-800 w-full flex justify-center items-center">
           <l-quantum color='pink' speed='1.70' size='145' ></l-quantum>
        </div>

        
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};
PrivateRouter.propTypes = {
    children: PropTypes.node
}
export default PrivateRouter;