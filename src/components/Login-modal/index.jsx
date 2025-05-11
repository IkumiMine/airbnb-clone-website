import React from 'react';
import LoginAuth from '../Login-Auth';
import { IoCloseOutline } from "react-icons/io5";

const LoginModal = ({ email, setEmail, password, setPassword, toggleLoginModal, toggleDropdown }) => {
    return (
        <section className={`bg-[rgba(0,0,0,0.3)] fixed top-0 left-0 w-full h-full z-40`}>
            <div className={`filter-modal overflow-clip flex justify-center items-center px-[40px] py-[23px]`}>
                <div className='w-[568px] max-w-[568px] max-h-[100%] rounded-[32px] bg-white'>
                    <div className='filter-modal-header flex justify-start items-center pt-[1rem] pb-[1rem] pl-[1rem] pr-[1rem] border-b border-gray-200'>
                        <IoCloseOutline 
                            className='text-2xl cursor-pointer' 
                            onClick={toggleLoginModal}
                        />
                        <h2 className='text-md font-semibold tracking-tighter grow text-center pr-[2rem]'>Log in</h2>
                    </div>
                    <div className='filter-modal-body overflow-y-auto overflow-x-auto max-h-[400px]'>
                        <div className='border-b border-gray-200 pb-[2rem] mx-[1rem]'>
                            <h3 className='text-lg font-semibold py-[1.3rem]'>Welcome to Airbnb</h3>
                            <LoginAuth
                                email={email}
                                setEmail={setEmail}
                                password={password}
                                setPassword={setPassword}
                                toggleLoginModal={toggleLoginModal}
                                toggleDropdown={toggleDropdown}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginModal;