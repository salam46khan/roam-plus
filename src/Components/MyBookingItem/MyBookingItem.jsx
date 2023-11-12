import PropTypes from 'prop-types'
const MyBookingItem = ({book}) => {
    const {service_name, service_area, price, status, date, servicePhoto} = book
    return (
        <tr>
            <td>
                <img className='h-14 w-16 object-cover rounded-xl' src={servicePhoto} alt="" />
            </td>
            <td>
                <p className="text-xl text-pink-400">{service_name}</p>
                <p>{date}</p>
            </td>
            <td>{service_area}</td>
            <td>{price} tk / per day</td>
            <td>{status}</td>
        </tr>
    );
};
MyBookingItem.propTypes={
    book: PropTypes.object
}
export default MyBookingItem;