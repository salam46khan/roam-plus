import { useLottie } from "lottie-react";
import logo from '../../../public/img/logo.png'
import AllBanner from '../../Components/AllBanner/AllBanner'
import errorAni from '../../assets/error.json';
import { Link } from "react-router-dom";
const Error = () => {

    const options = {
        animationData: errorAni,
        loop: true
    };
    const { View } = useLottie(options);

    return (
        <div className=" dark:text-base-100 dark:bg-slate-800 font-Normal">
            <AllBanner>Error</AllBanner>
            <div className="container mx-auto flex justify-center items-center h-full">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 flex justify-center flex-col items-center space-y-3">
                        <img className="w-1/3" src={logo} alt="" />
                        <h5 className="text-3xl">Page not found</h5>
                        <Link to={'/'} className="button bg-[#0001] dark:bg-[#fff5]">Go Back Home</Link>
                    </div>
                    <div className="w-full md:w-1/2 p-4 overflow-hidden">
                        {View}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Error;