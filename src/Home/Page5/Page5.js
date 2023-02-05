import React, { useEffect } from 'react';
import svg from '../../assets/svg_with_paths-r.png';
import bg1 from '../../assets/karavan-social-networking-app-screen.png';
import bg2 from '../../assets/developers-for-social-media-app.png';
import bg3 from '../../assets/karavan-social-networking-app-screen-2.png';
import bg4 from '../../assets/social-networking-app-case-study.png';
import bg5 from '../../assets/karavan_2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Page5 = () => {
    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);
    return (
        <div className='h-screen lg:flex lg:flex-row-reverse relative'>
            <div className='bg-sky-400 lg:w-3/5 lg:h-full flex'>
                <div data-aos='fade-down'>
                    <img src={bg1} alt="" className='translate-x-40' />
                </div>
                <div data-aos='fade-up'>
                    <img src={bg5} alt="" className='absolute bottom-0' />
                </div>
                <div data-aos='fade-up'>
                    <img src={bg3} alt="" className='absolute bottom-0' />
                </div>
                <div data-aos='fade-down'>
                    <img src={bg4} alt="" className='-translate-x-36' />
                </div>
                <div data-aos='fade-down'>
                    <img src={bg2} alt="" className='translate-y-32 -translate-x-28' />
                </div>


            </div>
            <div className='bg-blue-700 w-full lg:h-full lg:w-2/5 relative'>
                <div className='hidden lg:flex'>
                    <img src={svg} alt="" className='bg-blue-700 rounded-full w-56 h-56 absolute' style={{ 'top': '81px', 'left': '386px' }} />
                </div>
                <div className='hidden lg:flex' data-aos='fade-up'>
                    <div className='absolute' style={{ 'top': '156px', 'left': '366px' }}>
                        <p className='text-white'>Text Headline</p>
                        <h2 className='text-3xl text-white font-bold'>Text Headline</h2>
                        <p className='text-white ml-20'>Footer Headline</p>
                    </div>
                </div>
                <div className='translate-x-12  lg:translate-y-80 lg:translate-x-16 py-20 lg:py-0'>
                    <h2 className='text-3xl text-white font-bold py-3' data-aos='fade-up'>ABC 567</h2>
                    <p className='text-white'>We are the best development <br /> company in the world</p>

                    <p className='text-white pt-20'>View Case Study</p>
                </div>
            </div>
        </div>
    );
};

export default Page5;