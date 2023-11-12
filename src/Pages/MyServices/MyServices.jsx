import { useContext, useEffect, useState } from "react";
import AllBanner from "../../Components/AllBanner/AllBanner";
import { AuthContext } from "../../Provider/AuthProvider";
import MyServiceItem from "../../Components/MyServiceItem/MyServiceItem";
import Swal from 'sweetalert2'

const MyServices = () => {
    const { user } = useContext(AuthContext)
    const [myService, setMyService] = useState([])
    const url = `https://roam-plus-server.vercel.app/my-services?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyService(data))
    }, [url])


    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://roam-plus-server.vercel.app/services/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: 'Delete!',
                        text: 'Your Service Delete successfuly',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    const remaining = myService.filter(service => service._id !== id)
                    setMyService(remaining)
                }
            })
    }

    return (
        <div className="dark:bg-slate-800 dark:text-base-100">
            <AllBanner>My Services</AllBanner>
            <div className="container font-Normal mx-auto py-10 p-3">
                {myService.length> 0 ?
                <div className="overflow-x-auto">
                    <table className="table ta">
                        <thead className="text-xl text-pink-400">
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myService.map(mySer => <MyServiceItem 
                                    key={mySer._id}
                                    mySer={mySer}
                                    handleDelete={handleDelete}
                                    ></MyServiceItem>)
                            }
                        </tbody>
                    </table>
                </div> : '' 
                }
            </div>
        </div>
    );
};

export default MyServices;