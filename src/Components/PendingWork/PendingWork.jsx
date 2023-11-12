import PropTypes from 'prop-types'
const PendingWork = ({ pending }) => {
    const { service_name, servicePhoto, service_area, date, price, status } = pending;

    const handleStatus = event =>{
        console.log(event.target.value);
    }
    return (
        <tr>
            <td>
                <img className='h-14 w-16 object-cover rounded-xl' src={servicePhoto} alt="" />
            </td>
            <td>{service_name}</td>
            <td>{service_area}</td>
            <td>{date}</td>
            <td>{price}</td>
            <td>
                <select onChange={handleStatus} className="select bg-inherit border">
                    <option disabled selected>{status}</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
            </td>
        </tr>
    );
};

PendingWork.propTypes = {
    pending: PropTypes.object
}
export default PendingWork;