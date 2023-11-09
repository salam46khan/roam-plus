import PropTypes from 'prop-types'
const FeatureItems = ({feature}) => {
    const {feature_name, description , icon} = feature
    return (
        <div className="shadow-inner z-10 dark:shadow-[#fff8]  p-4 py-10 rounded-lg bg-[#fff5] dark:bg-[#ffffff4d] text-center space-y-3">
            <img className="rounded-full w-20 mx-auto" src={icon} alt="" />
            <h2 className='font-bold text-3xl'>{feature_name}</h2>
            <p>{description}</p>
        </div>
    );
};
FeatureItems.propTypes = {
    feature: PropTypes.object
}
export default FeatureItems;