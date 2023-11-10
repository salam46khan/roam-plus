import { useEffect, useState } from "react";
import ServiceSecItem from "../../../Components/ServiceSecItem/ServiceSecItem";
import {Link} from 'react-router-dom'

const ServiceSec = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/home-services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className="p-3 py-10 dark:bg-slate-800 dark:text-base-100 font-Normal relative">

            <div className="absolute hidden md:block h-[200px] w-[200px] rounded-full bg-gradient-to-r from-purple-500  to-pink-500 right-0 top-20 z-0"></div>

            <div className="container mx-auto z-10">
                <div className="text-center space-y-3">
                    <h2 className="font-Title text-4xl">Service</h2>
                    <p className="w-full md:w-1/2 mx-auto">
                        With Roam Plus, you are not just visiting a destination; you are immersing yourself in its soul.
                    </p>
                </div>
                <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                        service.map(service => <ServiceSecItem key={service.service_id} service={service}></ServiceSecItem>)
                    }
                </div>
                <div className="text-center">
                    <Link to={'/services'}>
                        <button className="button bg-[#0001] dark:bg-[#fff5]">All Service</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceSec;