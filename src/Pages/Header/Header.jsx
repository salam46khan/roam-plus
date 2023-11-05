import { NavLink } from "react-router-dom";
import './Header.css'
import { useEffect, useState } from "react";

const Header = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(()=>{
        const handleScroll = () =>{
            if(window.scrollY > 0){
                setScroll(true)
            }
            else{
                setScroll(false)
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () =>{
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    const navlinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/services'}>Services</NavLink></li>
        <li tabIndex={0}>
            <details>
                <summary>Deshbord</summary>
                <ul className={`${scroll ? 'bg-slate-700': 'bg-transparent'} shadow-lg`}>
                    <li><NavLink to={'/a'}>a</NavLink></li>
                    <li><NavLink to={'/b'}>b</NavLink></li>
                    <li><NavLink to={'/c'}>c</NavLink></li>
                </ul>
            </details>
        </li>
    </>
    return (
        <div className={`${scroll ? 'bg-slate-700 sticky top-0 left-0 shadow-lg ' : 'absolute top-0 left-0 w-full'} text-white`}>
            <div className="navbar " id="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Header;