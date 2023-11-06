import './Banner.css';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
const Banner = () => {
    const [text] = useTypewriter({
        words:['Happy','More Knowledgeable', 'Adaptable', 'More Resilient'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 100,
        delaySpeed: 2000
    })
    return (
        <div className='banner p-3'>
            <div className='container mx-auto flex justify-center items-center pt-20 pb-10'>
                <div className=' md:w-[60%] w-full h-full text-slate-50 text-center mt-10 space-y-2 font-Normal'>
                    <h5 className='text-xl md:text-2xl text-pink-400'>Welcome to</h5>
                    <h1 className='lg:text-8xl md:text-7xl text-5xl font-extrabold font-BannerTitle'>Roam Plus</h1>
                    <h3 className='text-3xl'>Adventure make you <span className='text-pink-400'>
                         {text}
                    </span>
                    <span className='text-pink-400'>
                        <Cursor cursorStyle='/'></Cursor>
                    </span>
                    
                    </h3>
                    <p>When we experience adventure, we find ourselves in the present moment and savor all the beauty that life has to offer.</p>
                    <button className='button bg-[#fff5]'>About Us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;