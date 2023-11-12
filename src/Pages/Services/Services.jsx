import { useState } from "react";
import AllBanner from "../../Components/AllBanner/AllBanner";
import { FaSearch } from 'react-icons/fa'

import { useLoaderData } from "react-router-dom";
import ServiceSecItem from "../../Components/ServiceSecItem/ServiceSecItem";

const Services = () => {
    const loadService = useLoaderData()
    const [services, setServices] = useState(loadService);



    let area = '';
    const handleInputValue = event => {
        area = event.target.value
    }
    const handleClick = () => {
        fetch(`http://localhost:5000/services?name=${area}`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
                area = '';
            })
    }
    

    const handleFilter = event => {
        const area = event.target.value;
        fetch(`http://localhost:5000/services-filter?area=${area}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }

    return (
        <div className="dark:bg-slate-800">
            <AllBanner>Services</AllBanner>
            <div className=" dark:text-white container mx-auto font-Normal py-10 p-3">
                
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="form-control">
                        <div className="input-group">
                            <input onChange={handleInputValue} type="text" placeholder="Search…" className="input border-secondary bg-transparent input-bordered" name="search" />
                            <button onClick={handleClick} className="btn btn-secondary text-2xl">
                                <FaSearch></FaSearch>
                            </button>
                        </div>
                    </div>
                    <div>
                        <select onChange={handleFilter} className="select select-secondary bg-inherit w-full max-w-xs">
                            <option disabled selected>All</option>
                            <option>Khulna</option>
                            <option>Bagherhat</option>
                            <option>Sathkhira</option>
                            <option>Jessore</option>
                            <option>Magura</option>
                            <option>Jhenaidah</option>
                            <option>Narail</option>
                            <option>Jhenaidah</option>
                            <option>Kushtia</option>
                            <option>Chuadanga</option>
                            <option>Meherpur</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
                    {
                        services.map(service => <ServiceSecItem service={service} key={service._id}></ServiceSecItem>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Services;