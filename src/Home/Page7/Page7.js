import React, { useEffect } from 'react';
import svg from '../../assets/svg_with_paths-r.png';
import img from '../../assets/mobile-app-of-the-year-by-entrepreneur.png'
import bg1 from '../../assets/melltoo-img2.png'
import bg2 from '../../assets/melltoo-img1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Page7 = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (
        <div className='h-screen lg:flex lg:flex-row-reverse relative'>
            <div className='bg-green-400 lg:w-3/5 lg:h-full flex'>
                <div data-aos='fade-up'>
                    <img src={bg1} alt="" className='h-5/6 w-4/5 lg:translate-y-24 lg:translate-x-40' />
                </div>
                <div data-aos='fade-up'>
                    <img src={bg2} alt="" className='h-5/6 w-3/5 lg:translate-y-16' />
                </div>

            </div>
            <div className='bg-green-700 w-full lg:h-full lg:w-2/5 relative'>
                <div className='hidden lg:flex'>
                    <img src={svg} alt="" className='bg-green-700 rounded-full w-56 h-56 absolute' style={{ 'top': '81px', 'left': '386px' }} />
                </div>
                <div className='hidden lg:flex' data-aos='fade-down'>
                    <div className='absolute' style={{ 'top': '156px', 'left': '362px' }}>
                        <p className='text-white'>Biggest Classifieds</p>
                        <h2 className='text-4xl text-white font-bold'>East Asia</h2>
                        <p className='text-white ml-20'>Countries</p>
                    </div>
                </div>
                <div className='translate-x-12 lg:translate-y-64 lg:translate-x-16 py-20 lg:py-0'>
                    <img src={img} className='lg:w-72 h-20 hidden lg:flex' alt="" />
                    <h2 className='text-3xl text-white font-bold py-3'>ABC 23478</h2>
                    <p className='text-white'>We are the best development <br /> company in the world</p>
                    <p className='text-white pt-20' data-aos='zoom-in'>View Case Study</p>
                </div>
            </div>
        </div>
    );
};

export default Page7;