import { useEffect, useState } from "react";
import { useLottie } from "lottie-react";
import faqAni from '../../../assets/faq2.json'
import FaqItem from "../../../Components/FaqItem/FaqItem";

const Faq = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('https://roam-plus-server.vercel.app/faq')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const options = {
        animationData: faqAni,
        loop: true
    };
    const { View } = useLottie(options);
    return (
        <div className="dark:bg-slate-800 dark:text-base-100 py-10 p-3 font-Normal relative">

            <div className="absolute hidden md:block lg:h-[600px] lg:w-[600px] md:h-[400px] md:w-[400px] rounded-full bg-gradient-to-r from-purple-500  to-pink-500  left-[-25%] top-10 z-0"></div>

            <div className="container mx-auto">
                <div className="text-center z-10 space-y-3">
                    <h2 className="font-Title text-4xl">Frequently Asked Questain</h2>
                    <p className="w-full md:w-1/2 mx-auto z-10">
                        With Roam Plus, you are not just visiting a destination; you are immersing yourself in its soul.
                    </p>
                </div>
                <div className="py-10 flex items-center flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                        <div className="w-full mx-auto md:w-3/4">
                            {View}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 join join-vertical">
                        {
                            service.map(faq => <FaqItem faq={faq} key={faq._id}></FaqItem>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;