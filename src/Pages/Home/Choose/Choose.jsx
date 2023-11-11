import { useEffect } from "react";
import { useState } from "react";
import FeatureItems from "../../../Components/FeatureItems/FeatureItems";


const Choose = () => {
    const [feature, Setfeature] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/feature')
        .then(res => res.json())
        .then(data => Setfeature(data))
    },[])

    return (
        <div className="dark:bg-slate-800 dark:text-base-100 py-10 p-3 font-Normal relative">
            <div className="absolute hidden md:block lg:h-[600px] lg:w-[600px] md:h-[400px] md:w-[400px] rounded-full bg-gradient-to-r from-purple-500  to-pink-500  left-[-25%] top-10 z-0"></div>
            <div className="absolute hidden md:block h-[200px] w-[200px] rounded-full bg-gradient-to-r from-purple-500  to-pink-500 right-0 bottom-0 z-0"></div>
            <div className="container mx-auto z-10">
                <div className="text-center z-10 space-y-3">
                    <h2 className="font-Title text-4xl">Why Choose Us?</h2>
                    <p className="w-full md:w-1/2 mx-auto z-10">
                    With Roam Plus, you are not just visiting a destination; you are immersing yourself in its soul.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10 z-10">
                    {
                        feature.map(feature => <FeatureItems key={feature._id} feature={feature}></FeatureItems>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Choose;