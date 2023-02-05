import React, { useEffect } from 'react';
import svg from '../../assets/svg_with_paths-r.png';
import bg1 from '../../assets/veme-blockchain-app-developed.png';
import bg2 from '../../assets/veme-app-ui-design.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Page2 = () => {

    useEffect(() => {
        AOS.init({ duration: 500 });
    }, [])
    // h-4/6 w-4/6 translate-y-28 lg:translate-x-36 lg:translate-y-44
    return (
        <div className='h-screen lg:flex lg:flex-row-reverse relative'>
            <div className='bg-blue-900 lg:w-3/5 lg:h-full flex'>
                <div data-aos='fade-up'>
                    <img src={bg1} alt="" className='h-4/6 w-4/6 translate-x-12 lg:translate-x-36 absolute bottom-0' />
                </div>
                <div data-aos='fade-down'>
                    <img src={bg2} alt="" className='h-4/6 w-4/6 lg:translate-x-20' />
                </div>

            </div>
            <div className='bg-indigo-700 w-full lg:h-full lg:w-2/5 relative'>
                <div className='hidden lg:flex'>
                    <img src={svg} alt="" className='bg-indigo-700 rounded-full w-56 h-56 absolute' style={{ 'top': '81px', 'left': '386px' }} />
                </div>
                <div className='hidden lg:flex' data-aos='fade-up'>
                    <div className='absolute' style={{ 'top': '156px', 'left': '326px' }}>
                        <p className='text-white'>The Next Big</p>
                        <h2 className='text-4xl text-white font-bold'>Blockchain</h2>
                        <p className='text-white ml-28'>Revolution</p>
                    </div>
                </div>
                <div className='translate-x-12  lg:translate-y-80 lg:translate-x-16 py-20 lg:py-0'>
                    <h2 className='text-3xl text-white font-bold py-3' data-aos='fade-up'>ABC 234</h2>
                    <p className='text-white'>We are the best development <br /> company in the world</p>

                    <p className='text-white pt-20'>Coming Soon</p>
                </div>
            </div>
        </div>
    );
};

export default Page2;