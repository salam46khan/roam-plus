import './AllBanner.css'
import PropTypes from 'prop-types'
const AllBanner = ({children}) => {
    return (
        <div className='all-banner bg-blue-400'>
            <div className='container mx-auto flex justify-center items-center h-full'>
                <h2 className='font-BannerTitle text-5xl'>
                    {children}
                </h2>
            </div>
        </div>
    );
};
AllBanner.propTypes = {
    children: PropTypes.node
}
export default AllBanner;