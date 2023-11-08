import { FaEnvelope, FaFacebookF, FaHome, FaInstagram,  FaPhone, FaRegCopyright, FaTelegram, FaTwitter,  FaYoutube } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti'
import logo from '../../../public/img/logo.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="py-10 p-3 font-Normal dark:bg-slate-900 dark:text-base-100">
            <div className="container mx-auto flex flex-col md:flex-row justify-between gap-4">
                <div className=" w-full md:w-1/3">
                    <img className='w-[160px]' src={logo} alt="" />
                    <p>
                    Roam Plus is a leading guideline services organization, specializing in providing comprehensive support and guidance for tourists from around the world.
                    </p>
                    <div className='flex items-center gap-2 font-semibold'>
                        <TiTick className='text-pink-400 text-2xl'></TiTick>
                        <span>Expert Guidance</span>
                    </div>
                    <div className='flex items-center gap-2 font-semibold'>
                        <TiTick className='text-pink-400 text-2xl'></TiTick>
                        <span>Safety and Comfort</span>
                    </div>
                    <div className='flex items-center gap-2 font-semibold'>
                        <TiTick className='text-pink-400 text-2xl'></TiTick>
                        <span>Cultural Immersion</span>
                    </div>
                </div>
                <div className=" w-full md:w-1/3 p-2">
                    <h3 className="font-Title text-3xl text-pink-400">Contact</h3>
                    <hr className='w-2/3 border-slate-800 dark:border-base-200' />
                    <div className='mt-3'>
                        <div className='flex gap-2 items-center'>
                            <FaPhone></FaPhone>
                            <span>+8801771-000000</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaHome></FaHome>
                            <span>Satkhira, Bangladesh</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaEnvelope></FaEnvelope>
                            <span>salam46.khan@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className=" w-full md:w-1/3 p-2">
                    <h3 className="font-Title text-3xl text-pink-400">Follow</h3>
                    <hr className='w-2/3 border-slate-800 dark:border-base-200' />
                    <div className='flex flex-wrap gap-3 text-2xl mt-2'>
                        <Link className=' rounded-full p-2 hover:bg-pink-400 duration-500' to={'/'}><FaFacebookF></FaFacebookF></Link>
                        <Link className=' rounded-full p-2 hover:bg-pink-400 duration-500' to={'/'}><FaYoutube></FaYoutube></Link>
                        <Link className=' rounded-full p-2 hover:bg-pink-400 duration-500' to={'/'}><FaTwitter></FaTwitter></Link>
                        <Link className=' rounded-full p-2 hover:bg-pink-400 duration-500' to={'/'}><FaInstagram></FaInstagram></Link>
                        <Link className=' rounded-full p-2 hover:bg-pink-400 duration-500' to={'/'}><FaTelegram></FaTelegram></Link>
                        
                    </div>
                </div>
                
            </div>
            <div className='container mx-auto pt-5 text-center'>
                <hr className='border-slate-800 dark:border-base-200'/>
                <p className='mx-auto inline-block mt-2'>
                    Copyright<FaRegCopyright className='m-1 inline-block'></FaRegCopyright>2023 - 2024 Roam Plus. All rights reserved. 
                </p>
            </div>
        </div>
    );
};

export default Footer;