import PropTypes from 'prop-types'
import Swal from 'sweetalert2';
const PendingWork = ({ pending }) => {
    const { _id, service_name, servicePhoto, service_area, date, price, status } = pending;

    const handleStatus = event =>{
        const status = event.target.value;
        const newStatus = {status}
        fetch(`https://roam-plus-server.vercel.app/booking/${_id}`,{
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newStatus)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Status Update successfuly',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })
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
                    <option>Progress</option>
                    <option>Completed</option>
                </select>
            </td>
        </tr>
    );
};

PendingWork.propTypes = {
    pending: PropTypes.object
}
export default PendingWork;