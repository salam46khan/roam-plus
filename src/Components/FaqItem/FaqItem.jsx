import PropTypes from 'prop-types'
const FaqItem = ({faq}) => {
    const {service_name, service_description} = faq;
    return (
        <div className="collapse collapse-arrow join-item border border-base-300 ">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div className="collapse-title text-xl font-medium">
                <h5 className='text-xl text-pink-400'>{service_name}</h5>
            </div>
            <div className="collapse-content">
                <p>{service_description}</p>
            </div>
        </div>
    );
};
FaqItem.propTypes = {
    faq: PropTypes.object
}
export default FaqItem;