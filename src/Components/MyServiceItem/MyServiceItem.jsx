import PropTypes from 'prop-types';
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2'

const MyServiceItem = ({ mySer, handleDelete}) => {
    const { _id, photoURL, service_name, service_area, price } = mySer;

    

    const handleUpdate = () =>{
        console.log('update');
        Swal.fire({
            title: 'Delete!',
            text: 'Your Service Delete successfuly',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
    }

    return (
        <tr>
            <td className=''>
                <img className='h-20 w-28 object-cover' src={photoURL} alt="" />
            </td>
            <td>
                <h2 className='font-bold text-xl'>{service_name}</h2>
                <p>{service_area}</p>
            </td>
            <td>{price} tk / per day</td>
            <td className='space-x-2'>
                <button onClick={() => handleDelete(_id)} className='btn btn-secondary btn-circle tooltip' data-tip="Delete">
                    <RiDeleteBin6Line className='text-xl mx-auto'></RiDeleteBin6Line>
                </button>
                <button onClick={handleUpdate} className='btn btn-circle btn-secondary   tooltip' data-tip="Edit">
                    <BiEdit className='text-xl mx-auto'></BiEdit>
                </button>
            </td>
        </tr>
    );
};
MyServiceItem.propTypes = {
    mySer: PropTypes.object,
    handleDelete: PropTypes.func
}
export default MyServiceItem;