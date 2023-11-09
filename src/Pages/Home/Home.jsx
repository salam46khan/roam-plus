import Banner from "./Banner/Banner";
import Choose from "./Choose/Choose";
import Faq from "./FAQ/Faq";
import ServiceSec from "./ServiceSec/ServiceSec";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceSec></ServiceSec>
            <Choose></Choose>
            <Faq></Faq>
        </div>
    );
};

export default Home;