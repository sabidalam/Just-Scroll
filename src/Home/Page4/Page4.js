import React, { useEffect } from 'react';
import svg from '../../assets/svg_with_paths-r.png';
import bg1 from '../../assets/ux-strategy-for-mobile-app-devlopment.png';
import bg2 from '../../assets/domi-img1.png';
import bg3 from '../../assets/pizza_box.png';
import bg4 from '../../assets/dominos-bread.png';
import bg5 from '../../assets/dominos-bread2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Page4 = () => {

    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);

    return (
        <div className='h-screen lg:flex lg:flex-row-reverse relative'>
            <div className='bg-gray-900 lg:w-3/5 lg:h-full flex'>
                <div data-aos='fade-right'>
                    <img src={bg3} alt="" className='absolute top-0' />
                </div>
                <div data-aos='fade-up'>
                    <img src={bg2} alt="" className='h-3/5 absolute bottom-0 lg:-translate-x-20' />
                </div>
                <div data-aos='fade-down'>
                    <img src={bg1} alt="" className='h-4/6 translate-y-24' />
                </div>


            </div>
            <div className='w-full lg:h-full lg:w-2/5 relative' style={{ 'background': '#192841' }}>
                <div className='hidden lg:flex'>
                    <img src={svg} alt="" className='rounded-full w-56 h-56 absolute' style={{ 'top': '81px', 'left': '386px', 'background': '#192841' }} />
                </div>
                <div className='hidden lg:flex' data-aos='fade-up'>
                    <div className='absolute' style={{ 'top': '156px', 'left': '326px' }}>
                        <p className='text-white'>Redefining</p>
                        <h2 className='text-3xl text-white font-bold'>UX STRATEGY</h2>
                        <p className='text-white ml-24'>and UI design</p>
                    </div>
                </div>
                <div className='translate-x-12  lg:translate-y-80 lg:translate-x-16 py-20 lg:py-0'>
                    <h2 className='text-3xl text-white font-bold py-3' data-aos='fade-up'>ABC 456</h2>
                    <p className='text-white'>We are the best development <br /> company in the world</p>

                    <p className='text-white pt-20'>View Case Study</p>
                </div>
            </div>
        </div>
    );
};

export default Page4;