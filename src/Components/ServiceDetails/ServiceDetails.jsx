import { useLoaderData } from "react-router-dom";
import AllBanner from "../AllBanner/AllBanner";

const ServiceDetails = () => {
    const SingleService = useLoaderData()

    const { photoURL, service_name, discription, provider_img, provider_name, service_area, price} = SingleService;
    return (
        <div className="dark:bg-slate-800 font-Normal">
            <AllBanner>Services details</AllBanner>
            <div className="container mx-auto dark:text-base-200 flex flex-col md:flex-row py-10">
                <div className="w-full md:w-3/12">
                    <div className="shadow-inner dark:shadow-[#fff8]  p-4 py-10 rounded-lg hover:bg-[#00000016] bg-[#0000000b] dark:bg-[#ffffff37] hover:dark:bg-[#ffffff5e] text-center space-y-3 duration-300 max-w-[280px] mx-auto  overflow-hidden">
                        <img className="h-[250px] w-full rounded-lg" src={provider_img} alt="" />
                        <h2 className="text-pink-400 text-2xl">{provider_name}</h2>
                        <p>{service_area}</p>
                    </div>
                </div>
                <div className="w-full md:w-9/12 flex flex-col md:flex-row">
                    <div className="w-full md:w-8/12 px-4">
                        <img className="w-full rounded-lg" src={photoURL} alt="" />
                        <p className="p-4">{discription}</p>
                    </div>
                    <div className="w-full md:w-4/12 p-4 shadow-inner dark:shadow-[#fff8] rounded-lg  bg-[#0000000b] dark:bg-[#ffffff37] space-y-3 ">
                        <h2 className="text-pink-400 text-2xl ">{service_name}</h2>
                        <p>Location: {service_area}</p>
                        <p className="text-xl font-bold">
                            Price: {price} tk / per day
                        </p>
                        <button className="button bg-[#0001] dark:bg-[#fff5]">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;