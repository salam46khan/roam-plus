import AllBanner from "../../Components/AllBanner/AllBanner";
import { useLottie } from "lottie-react";
import addSerAni from '../../assets/addSer.json'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const AddService = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    const handleAddService = event => {
        
        event.preventDefault();
        const form = event.target;
        const service_name = form.serviceName.value;
        const service_area = form.serviceArea.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value;
        const discription = form.discription.value;

        const provider_name = user?.displayName;
        const provider_img = user?.photoURL;
        const AddService = {service_name, service_area, price, photoURL, discription, provider_img, provider_name}
        console.log(AddService);

    }

    const options = {
        animationData: addSerAni,
        loop: true
    };
    const { View } = useLottie(options);
    return (
        <div className="dark:bg-slate-800 dark:text-base-100">
            <AllBanner>Add Service</AllBanner>
            <div className="container mx-auto py-10 p-3">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="w-full md:w-1/2 px-0 md:px-10">
                        <form onSubmit={handleAddService}>
                            <div className="flex flex-col lg:flex-row gap-4">
                                <div className="w-full lg:w-1/2">
                                    <input className="inp" type="text" placeholder="Service Name" name="serviceName" required />
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <input className="inp" type="text" placeholder="Service Area" name="serviceArea" required />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-4 mt-4">
                                <div className="w-full lg:w-1/2">
                                    <input className="inp" type="text" placeholder="Price" name="price" required />
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <input className="inp" type="text" placeholder="Service Photo URL" name="photoURL" required />
                                </div>
                            </div>
                            <div>
                                <div className="w-full">
                                    <textarea name="discription" placeholder="Discription..." className="w-full mt-4 inp"></textarea>
                                </div>
                            </div>
                            <div className="mt-4">
                                <input className="w-full btn btn-secondary" type="submit" value="Add Service" />
                            </div>
                        </form>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="w-full lg:w-2/3">
                            {View}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;