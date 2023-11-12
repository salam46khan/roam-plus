import { useState } from "react";
import AllBanner from "../../Components/AllBanner/AllBanner";
import { useEffect } from "react";
import MyBookingItem from "../../Components/MyBookingItem/MyBookingItem";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import PendingWork from "../../Components/PendingWork/PendingWork";

const MySchedules = () => {
    const [booked, setBooked] = useState([])
    const [pendingWork, SetpendingWork] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:5000/my-booking?email=${user.email}`)
            .then(res => res.json())
            .then(data => setBooked(data))
    }, [user])

    useEffect(() => {
        fetch(`http://localhost:5000/my-pending-work?email=${user.email}`)
            .then(res => res.json())
            .then(data => SetpendingWork(data))
    }, [user])
    return (
        <div className="dark:bg-slate-800 dark:text-base-100">
            <AllBanner>My Schedules</AllBanner>
            <div className="container font-Normal mx-auto py-10 p-3">
                <div className="py-5">
                    <h2 className="font-Title text-3xl text-pink-400">My Bookings</h2>
                    <hr className="w-2/3 md:w-1/3" />
                    {
                        booked.length > 0 ?
                            <div className="overflow-x-auto py-5">
                                <table className="table">
                                    {/* head */}
                                    <thead className="text-pink-400">
                                        <tr>
                                            <th>Photo</th>
                                            <th>Name</th>
                                            <th>Location</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            booked.map(book => <MyBookingItem key={book._id} book={book}></MyBookingItem>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                            :
                            <div className="py-2">
                                <h3 className="text-xl">There is no bookings data for you. Fast parches Our Service</h3>
                            </div>
                    }

                </div>
                <div className="py-5">
                    <h2 className="font-Title text-3xl text-pink-400">My Pending work</h2>
                    <hr className="w-2/3 md:w-1/3" />

                    {
                        pendingWork.length > 0 ?
                            <div className="overflow-x-auto py-5">
                                <table className="table">
                                    {/* head */}
                                    <thead className="text-pink-400">
                                        <tr>
                                            <th>Photo</th>
                                            <th>Name</th>
                                            <th>Location</th>
                                            <th>Date</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            pendingWork.map(pending => <PendingWork key={pending._id} pending={pending}></PendingWork>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                            :
                            <div className="py-2">
                                <h3 className="text-xl">There is no pending data for you. Fast add Service</h3>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MySchedules;