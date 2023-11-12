import { useLoaderData } from "react-router-dom";
import AllBanner from "../../Components/AllBanner/AllBanner";
import Swal from "sweetalert2";

const UpdateService = () => {

    const serviceData = useLoaderData()
    const {_id,service_name, service_area, price, photoURL, discription,} = serviceData
    console.log(serviceData);

    const handleUpdateService = event =>{
        event.preventDefault()
        const form = event.target;
        const service_name = form.serviceName.value;
        const service_area = form.serviceArea.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value;
        const discription = form.discription.value;

        const updateService = {service_name, service_area, price, photoURL, discription}
        fetch(`https://roam-plus-server.vercel.app/services/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateService)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Service Update successfuly',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })

    }
    return (
        <div className="dark:bg-slate-800 dark:text-base-100">
            <AllBanner>Update Service</AllBanner>
            <div className="container mx-auto py-10 p-3">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="w-full lg:w-2/3">
                            
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-0 md:px-10">
                        <form onSubmit={handleUpdateService}>
                            <div className="flex flex-col lg:flex-row gap-4">
                                <div className="w-full lg:w-1/2">
                                    <input className="inp" type="text" placeholder="Service Name" defaultValue={service_name} name="serviceName" required />
                                </div>
                                <div className="w-full lg:w-1/2">

                                    <select className="inp select-secondary" name="serviceArea" defaultValue={service_area}>
                                        <option value="Khulna">Khulna</option>
                                        <option value="Bagherhat">Bagherhat</option>
                                        <option value="Sathkhira">Sathkhira</option>
                                        <option value="Jessore">Jessore</option>
                                        <option value="Magura">Magura</option>
                                        <option value="Jhenaidah">Jhenaidah</option>
                                        <option value="Narail">Narail</option>
                                        <option value="Jhenaidah">Jhenaidah</option>
                                        <option value="Kushtia">Kushtia</option>
                                        <option value="Chuadanga">Chuadanga</option>
                                        <option value="Meherpur">Meherpur</option>

                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-4 mt-4">
                                <div className="w-full lg:w-1/2">
                                    <input className="inp" type="text" placeholder="Price" defaultValue={price} name="price" required />
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <input className="inp" type="text" placeholder="Service Photo URL" defaultValue={photoURL} name="photoURL" required />
                                </div>
                            </div>
                            <div>
                                <div className="w-full">
                                    <textarea name="discription" placeholder="Discription..." defaultValue={discription} className="w-full mt-4 inp"></textarea>
                                </div>
                            </div>
                            <div className="mt-4">
                                <input className="w-full btn btn-secondary" type="submit" value="Add Service" />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UpdateService;