import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'
import './TeamItem.css';
const TeamItem = ({team}) => {
    const {name, prof, img, fb_link, ins_link, twe_link} = team;
    return (
        <div className="shadow-inner z-10 dark:shadow-[#fff8]  p-4 py-10 rounded-lg hover:bg-[#00000016] bg-[#0000000b] dark:bg-[#ffffff37] hover:dark:bg-[#ffffff5e] text-center space-y-3 duration-300 w-[280px] team mx-auto md:mx-0 overflow-hidden">
            <img className='team-img rounded-lg' src={img} alt="" />
            <h3 className='text-2xl text-pink-400 font-semibold '>{name}</h3>
            <p className='prof'>{prof}</p>
            <div className='link-group flex justify-center gap-4'>
                <Link className='h-10 w-10 rounded-full bg-pink-400 flex justify-center items-center' to={fb_link}>
                    <FaFacebookF></FaFacebookF>
                </Link>
                <Link className='h-10 w-10 rounded-full bg-pink-400 flex justify-center items-center' to={ins_link}>
                    <FaInstagram></FaInstagram>
                </Link>
                <Link className='h-10 w-10 rounded-full bg-pink-400 flex justify-center items-center' to={twe_link}>
                    <FaTwitter></FaTwitter>
                </Link>
            </div>
        </div>
    );
};
TeamItem.propTypes = {
    team: PropTypes.object
}
export default TeamItem;