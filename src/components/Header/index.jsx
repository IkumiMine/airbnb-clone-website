import React from 'react';
import logo from '../../assets/logo/long-logo.png';
import { LuEarth } from "react-icons/lu";
import { LuMenu } from "react-icons/lu";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoSearchCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { MdOutlinePlace } from "react-icons/md";
import { motion, useScroll, useTransform } from 'framer-motion';

const Header = ({ isUserLogin, currentUser, properties, toggleDropdown, scrollY }) => {
    // Page navigation function
    const navigate = useNavigate();
    const navigateToPage= (pageName) => {
        navigate(pageName);
    }

    // Header animation
    const translateInitialHeader = useTransform(scrollY,[0,20],[0,-100]);
    const scaleInitialHeader = useTransform(scrollY,[0,20],[1,0.5]);
    const opacityInitialHeader = useTransform(scrollY,[0,20],[1,0]);
    const translateMainHeader = useTransform(scrollY,[0,20],[100,-23]); 
    const scaleMainHeader = useTransform(scrollY,[0,20],[0.5,1]);
    const opacityMainHeader = useTransform(scrollY,[0,20],[0,1]);
    const headerHight = useTransform(scrollY,[0,20],[100,0]);

    return ( 
        <header className='navbar flex flex-col py-[0.5rem] px-[3rem] bg-white shadow-[0_2px_0_0_rgba(0,0,0,0.05)]'>
            <div className="flex justify-between items-center">
                <div className='flex-1 min-w-[170px] cursor-pointer'
                    onClick={() => {navigateToPage("/")}}
                >
                    <MdOutlinePlace className='navbar-logo text-4xl text-theme' />
                    {/* <img src={logo} alt='logo' className='navbar-logo h-[2rem]'/> */}
                </div>
                <div>
                    <motion.div className="flex gap-5"
                                style={{ y: translateInitialHeader, 
                                        scale: scaleInitialHeader, 
                                        opacity: opacityInitialHeader 
                                    }}
                    >
                        <p className="cursor-pointer font-semibold">Homes</p>
                        <p className="cursor-pointer">Experiences</p>
                    </motion.div>
                </div>
                <div className='flex-1 flex justify-end items-center min-w-[170px]'>
                    <div className='airbnb-your-home-link text-xs font-semibold text-font-black rounded-[2rem] px-2.5 py-3.5 hover:bg-light-grey transition-all duration-200 cursor-pointer'>
                        Airbnb your home
                    </div>
                    <div className='rounded-[50%] px-[1rem] py-[1rem] hover:bg-light-grey transition-all duration-200 cursor-pointer'>
                        <LuEarth className='text-lg'/>
                    </div>
                    <div 
                        className='profile-menu-container flex justify-between items-center gap-[0.3rem] border border-grey rounded-[2rem] px-[0.5rem] py-[0.3rem] ml-2 hover:shadow-[0_1px_2px_rgba(0,0,0,0.15),0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-200 cursor-pointer'
                        onClick={toggleDropdown}
                    >
                        <LuMenu className='text-2xl pl-1'/>
                        {isUserLogin ? 
                            <img 
                                src={currentUser.profileImageUrl} 
                                alt={currentUser.id}
                                className='rounded-[50%]'
                            /> : 
                            <IoPersonCircleSharp className='text-4xl text-font-grey'/>
                        }
                    </div>
                </div>
            </div>
            <motion.div className='relative m-auto w-full'
                        style={{height: headerHight}}
            >
                <motion.div className='search-bar absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border w-[70%] grid grid-cols-6 grid-flow-col items-center border-grey rounded-[2rem] shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.15),0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-200 cursor-pointer'
                            style={{ y: translateInitialHeader, 
                                scale: scaleInitialHeader, 
                                opacity: opacityInitialHeader 
                            }}
                >
                    <div className='search-bar-text col-span-2 text-xs font-semibold hover:bg-light-grey hover:rounded-4xl'>
                        <div className="py-4 pl-4">
                            <div className='border-r border-grey'>
                                <p>Where</p>
                                <input className='text-font-black'
                                    placeholder='Search destinations'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='search-bar-text text-xs font-semibold hover:bg-light-grey hover:rounded-4xl'>
                        <div className="py-4 pl-4">
                            <div className='border-r border-grey'>
                                <p>Check in</p>
                                <input className='text-font-black'
                                    placeholder="Add dates"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='search-bar-text text-xs font-semibold hover:bg-light-grey hover:rounded-4xl'>
                        <div className="py-4 pl-4">
                            <div className='border-r border-grey'>
                                <p>Check out</p>
                                <input className='text-font-black'
                                    placeholder="Add dates"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='search-bar-text col-span-2 text-xs font-semibold hover:bg-light-grey hover:rounded-4xl'>
                        <div className="pl-4 flex justify-between items-center">
                            <div className='w-1/2'>
                                <p>Who</p>
                                <input className='text-font-black'
                                    placeholder='Add guests'
                                />
                            </div>
                            <IoSearchCircleSharp className='text-theme text-[40px]'/>
                        </div>
                    </div>
                </motion.div>
                <motion.div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-max'
                            style={{ y: translateMainHeader,
                                    scale: scaleMainHeader,
                                    opacity: opacityMainHeader
                                }}
                >
                    <div className='search-bar flex justify-between items-center gap-[0.5rem] pt-[0.3rem] pb-[0.3rem] pr-[0.2rem] pl-[0.9rem] border border-grey rounded-[2rem] shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.15),0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-200 cursor-pointer'>
                        <div className='search-bar-text border-r border-grey pr-[0.5rem]'>
                            <p className='text-sm font-semibold text-font-black'>Anywhere</p>
                        </div>
                        <div className='search-bar-text border-r border-grey pr-[0.5rem]'>
                            <p className='text-sm font-semibold text-font-black'>Any week</p>
                        </div>
                        <div className='search-bar-text-grey flex justify-between items-center gap-[0.5rem]'>
                            <p className='text-sm font-semibold pr-[0.5rem] text-font-grey'>Add guests</p>
                            <IoSearchCircleSharp className='text-4xl text-theme'/>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </header>
    );
}

export default Header;