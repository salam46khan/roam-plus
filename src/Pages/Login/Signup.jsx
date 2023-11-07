import { useLottie } from "lottie-react";
import { FcGoogle } from 'react-icons/fc'
import loginAni from "../../assets/loginAni.json";
import { Link } from 'react-router-dom';

const Signup = () => {
    const handleSingup = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email, password);
    }
    const options = {
        animationData: loginAni,
        loop: true
    };
    const { View } = useLottie(options);
    return (
        <div className="login font-Normal dark:text-white pt-10 p-3">
            <div className='container mx-auto py-10 '>
                <div className='flex flex-col md:flex-row items-center bg-[#ffffffd0] dark:bg-[#0000007a] rounded-lg py-5 px-2 md:p-10 m-0 md:m-10 shadow-lg dark:shadow-[#fff5]'>
                    <div className='md:w-1/2 w-full'>
                        <div className='w-2/3 mx-auto'>
                            {View}
                        </div>
                    </div>
                    <div className='md:w-1/2 w-full  md:px-10'>
                        <h1 className='text-4xl font-Title font-bold text-pink-400'>Sign Up</h1>
                        <form onSubmit={handleSingup}>
                            <div className="input-box">
                                <input className='w-full' type="text" name='name' required />
                                <span>Name</span>
                            </div>
                            <div className="input-box">
                                <input className='w-full' type="email" name='email' required />
                                <span>Email</span>
                            </div>
                            <div className="input-box">
                                <input className='w-full' type="password" name='password' required />
                                <span>Password</span>
                            </div>
                            <div>
                                <input className='w-full bg-pink-400 rounded-full mt-5 shadow-md p-3 uppercase' type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <div className='mt-6'>
                            <div className='relative'>
                                <hr className='absolute top-0 w-2/5 left-0 border-slate-800 dark:border-base-200' />
                                <hr className='absolute top-0 w-2/5 right-0 border-slate-800 dark:border-base-200' />
                                <span className='absolute -top-5 translate-x-[-50%] left-[50%] p-1 text-xl'>or</span>
                            </div>
                            <button className='w-full bg-pink-400 rounded-full mt-5 shadow-md p-3 uppercase '>
                                <span>
                                    <FcGoogle className='inline-block mr-1 text-xl'></FcGoogle>
                                </span>
                                login with google

                            </button>

                            <p className='text-center mt-3'>If have an account, <span className='text-pink-400 font-semibold'><Link to={'/login'}>Log In</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;