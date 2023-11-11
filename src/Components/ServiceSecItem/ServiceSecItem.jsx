import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
const ServiceSecItem = ({ service }) => {
    const {_id, photoURL, service_name, provider_img, provider_name, service_area, price  } = service
    return (
        <div className='flex flex-col md:flex-row overflow-hidden  rounded-lg hover:bg-[#00000016] bg-[#0000000b] dark:bg-[#ffffff37] hover:dark:bg-[#ffffff5e] shadow-inner dark:shadow-[#fff8] z-10 duration-300'>
            <div className='w-full  md:w-4/12 md:shrink-0 '>
                <img className='object-cover w-full md:h-full' src={photoURL} alt="" />
            </div>
            <div className='w-full md:w-8/12 p-4'>
                <h2 className='text-3xl font-semibold text-pink-400'>{service_name}</h2>
                <p className='bg-[#0001] dark:bg-[#fff5] py-2 px-5 inline-block'>{service_area}</p>
                
                <h4 className='text-2xl font-thin text-pink-400'>Price: {price} tk / per day</h4>
                <hr className='border-slate-800 dark:border-base-200 mt-3' />
                <div className='flex flex-col md:flex-row justify-between  md:items-center gap-2 py-2'>
                    <div className='flex items-center'>
                        <div className='h-16 w-16 rounded-full overflow-hidden mr-3'>
                            <img className='w-full h-full' src={provider_img} alt="" />
                        </div>
                        <h3 className='text-xl font-semibold'>{provider_name}</h3>
                    </div>

                    <Link to={`/service/${_id}`}>
                        <button className="button bg-[#0001] dark:bg-[#fff5]">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

ServiceSecItem.propTypes = {
    service: PropTypes.object
}
export default ServiceSecItem;