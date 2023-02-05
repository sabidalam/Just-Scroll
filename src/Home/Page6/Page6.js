import React, { useEffect } from 'react';
import svg from '../../assets/svg_with_paths-r.png';
import bg1 from '../../assets/interior.jpg';
import bg2 from '../../assets/erp-app-development-service.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Page6 = () => {
    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);
    return (
        <div className='h-screen lg:flex lg:flex-row-reverse relative'>
            <div className='bg-sky-400 lg:w-3/5 lg:h-full'>
                <div className=''>
                    <img src={bg1} alt="" className='lg:h-screen' />
                </div>
                <div className='-translate-y-3/4 lg:-translate-y-full'>
                    <img src={bg2} alt="" className='lg:h-screen' />
                </div>

            </div>
            <div className='bg-blue-800 w-full lg:h-full lg:w-2/5 relative'>
                <div className='hidden lg:flex'>
                    <img src={svg} alt="" className='bg-blue-800 rounded-full w-56 h-56 absolute' style={{ 'top': '81px', 'left': '386px' }} />
                </div>
                <div className='hidden lg:flex' data-aos='fade-up'>
                    <div className='absolute' style={{ 'top': '156px', 'left': '320px' }}>
                        <p className='text-white'>Developing ERP Solution for</p>
                        <h2 className='text-4xl text-white font-bold'>Text Headline</h2>
                        <p className='text-white ml-28'>In Future Industry</p>
                    </div>
                </div>
                <div className='translate-x-12  lg:translate-y-80 lg:translate-x-16 py-20 lg:py-0'>
                    <h2 className='text-3xl text-white font-bold py-3' data-aos='fade-up'>ABC 678</h2>
                    <p className='text-white'>We are the best development <br /> company in the world</p>

                    <p className='text-white pt-20'>View Case Study</p>
                </div>
            </div>
        </div>
    );
};

export default Page6;