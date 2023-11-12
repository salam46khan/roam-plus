import PropTypes from 'prop-types';
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const MyServiceItem = ({ mySer, handleDelete }) => {
    const { _id, photoURL, service_name, service_area, price } = mySer;


    return (
        <tr>
            <td className=''>
                <img className='md:h-20 md:w-28 object-cover' src={photoURL} alt="" />
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
                <Link to={`/update/${_id}`}>
                    <button className='btn btn-circle btn-secondary   tooltip' data-tip="Edit">
                        <BiEdit className='text-xl mx-auto'></BiEdit>
                    </button>
                </Link>
            </td>
        </tr>
    );
};
MyServiceItem.propTypes = {
    mySer: PropTypes.object,
    handleDelete: PropTypes.func
}
export default MyServiceItem;