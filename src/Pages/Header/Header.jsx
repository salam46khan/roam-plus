import { Link, NavLink } from "react-router-dom";
import './Header.css'
import { useEffect, useState } from "react";
import logo from '../../../public/img/logo.png';
import { ImSun } from 'react-icons/im'
import { FiMoon } from 'react-icons/fi'
import { BiUser } from 'react-icons/bi'

const Header = () => {
    const [scroll, setScroll] = useState(false);
    const [mood, setMood] = useState('light')

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true)
            }
            else {
                setScroll(false)
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const html = document.documentElement;
    const handleMood = () => {
        if (mood == 'light') {
            html.classList.remove('light')
            html.classList.add('dark')
            setMood('dark')
            localStorage.setItem('mood', 'dark')
        } else {
            html.classList.remove('dark')
            html.classList.add('light')
            setMood('light')
            localStorage.setItem('mood', 'light')
        }
    }
    useEffect(() => {
        const currentMood = localStorage.getItem('mood') || 'light';
        setMood(currentMood)
        html.classList.add(currentMood)
    }, [html])

    const navlinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/services'}>Services</NavLink></li>
        <li tabIndex={0}>
            <details>
                <summary>Deshbord</summary>
                <ul className={`${scroll ? 'dark:bg-slate-800 bg-slate-50 dark:text-white' : 'bg-transparent'} rounded-t-none rounded-md`}>
                    <li><NavLink to={'/a'}>a</NavLink></li>
                    <li><NavLink to={'/b'}>b</NavLink></li>
                    <li><NavLink to={'/c'}>c</NavLink></li>
                </ul>
            </details>
        </li>
    </>
    return (
        <div className={`${scroll ? 'dark:bg-slate-800 sticky top-0 left-0 shadow-lg dark:text-white bg-slate-50' : 'text-white'}  top-0 left-0 w-full absolute z-50`}>
            <div className="navbar font-Normal container mx-auto" id="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 ${scroll ? 'dark:bg-slate-800 dark:text-white bg-slate-50' : ''}`}>
                            {navlinks}
                        </ul>
                    </div>
                    <button className="hidden md:flex items-center ">
                        <img className="h-10" src={logo} alt="" />
                        <span className="uppercase font-extrabold text-xl">Roam Plus</span>
                    </button>
                </div>
                <button className="block md:hidden">
                    <img className="h-8" src={logo} alt="" />
                </button>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button onClick={handleMood} className=" bg-pink-400 w-10 h-10 text-xl flex justify-center items-center rounded-full">
                        {
                            mood == "light" ? <FiMoon></FiMoon> : <ImSun></ImSun>
                        }
                    </button>
                    <button className="bg-pink-400 w-10 h-10 text-xl flex justify-center items-center rounded-full hover:text-white ml-2">
                        <Link to={'/login'}>
                            <BiUser></BiUser>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;