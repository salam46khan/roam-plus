import './Login.css';
import { useLottie } from "lottie-react";
import {FcGoogle} from 'react-icons/fc'
import loginAni from "../../assets/loginAni.json";
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const {logInUser, googleSignIn} = useContext(AuthContext)
    console.log(error);

    const handleLogIn = event => {
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password);
        setError('')

        logInUser(email, password)
         .then(result =>{
            console.log(result.user);
         })
         .catch(error =>{
            console.log(error);
            setError(error.message)
         })
        
    }
    const handleGoogleLogin = () => {
        setError('')
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error =>{
                console.log(error);
                setError(error.message)
            })
    }

    const options = {
        animationData: loginAni,
        loop: true
    };
    const { View } = useLottie(options);
    return (
        <div className="login font-Normal dark:text-white pt-10 p-3">
            <div className='container mx-auto py-10 '>
                <div className='flex flex-col md:flex-row items-center bg-[#ffffffc4] dark:bg-[#00000060] rounded-lg py-5 px-2 md:p-10 m-0 md:m-10 shadow-lg dark:shadow-[#fff5]'>
                    <div className='md:w-1/2 w-full'>
                        <div className='w-2/3 mx-auto'>
                            {View}
                        </div>
                    </div>
                    <div className='md:w-1/2 w-full  md:px-10'>
                        <h1 className='text-4xl font-Title font-bold text-pink-400'>Log In</h1>
                        <form onSubmit={handleLogIn}>
                            
                            <div className="input-box">
                                <input className='w-full' type="email" name='email' required />
                                <span>Email</span>
                            </div>
                            <div className="input-box">
                                <input className='w-full' type="password" name='password' required />
                                <span>Password</span>
                            </div>
                            <div>
                                <input className='w-full bg-pink-400 rounded-full mt-5 shadow-md p-3 uppercase' type="submit" value="Log In" />
                            </div>
                        </form>
                        <div className='mt-6'>
                            <div className='relative'>
                                <hr className='absolute top-0 w-2/5 left-0 border-slate-800 dark:border-base-200'/>
                                <hr className='absolute top-0 w-2/5 right-0 border-slate-800 dark:border-base-200'/>
                                <span className='absolute -top-5 translate-x-[-50%] left-[50%] p-1 text-xl'>or</span>
                            </div>
                            <button onClick={handleGoogleLogin} className='w-full bg-pink-400 rounded-full mt-5 shadow-md p-3 uppercase '>
                            <span>
                                <FcGoogle className='inline-block mr-1 text-xl'></FcGoogle>
                            </span>
                            login with google
                            
                            </button>

                            <p className='text-center mt-3'>Does not have an account, <span className='text-pink-400 font-semibold'><Link to={'/signup'}>Sign Up</Link></span></p>

                            {
                                error? <p className='text-center mt-2 text-red-400'>{error}</p>: ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;