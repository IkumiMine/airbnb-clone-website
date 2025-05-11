import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';

const DropdownMenu = ({ isUserLogin, toggleLoginModal, toggleDropdown }) => {
    const navigate = useNavigate();

    const onLogout = () => {
        signOut(auth).then(() => {
            navigate("/");
            console.log("signed out successfully");
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
    }
    const navigateToPage= (pageName) => {
        navigate(pageName);
    }

    return (
        <ul className={`absolute top-[66px] right-[3rem] dropdown-menu w-[200px] rounded-[1rem] bg-white shadow-[0_3px_6px_rgba(0,0,0,0.4)] py-2 z-30`}>
            {!isUserLogin && <li className='py-[0.5rem] pl-[1rem] cursor-pointer hover:bg-gray-100 transition-all duration-200'>
                <a href='#' className='text-sm tracking-tight'>Sign up</a>
            </li>}
            {!isUserLogin && <li 
                className='py-[0.5rem] pl-[1rem] cursor-pointer hover:bg-gray-100 transition-all duration-200'
                onClick={() => {
                    toggleLoginModal(true);
                    toggleDropdown();
                }}
            >
                <a href='#' className='text-sm font-semibold tracking-tight'>Log in</a>
            </li>}
            {isUserLogin && 
                <>
                    <li 
                        className='py-[0.5rem] pl-[1rem] cursor-pointer hover:bg-gray-100 transition-all duration-200'
                        
                    >
                        <a href='#' className='text-sm font-semibold tracking-tight'>Messages</a>
                    </li>
                    <li 
                        className='py-[0.5rem] pl-[1rem] cursor-pointer hover:bg-gray-100 transition-all duration-200'
                        onClick={() => navigateToPage("/trips")}
                    >
                        <a href='#' className='text-sm font-semibold tracking-tight'>Trips</a>
                    </li>
                    <li 
                        className='py-[0.5rem] pl-[1rem] cursor-pointer hover:bg-gray-100 transition-all duration-200'
                        onClick={() => navigateToPage("/wishlists")}
                    >
                        <a href='#' className='text-sm font-semibold tracking-tight'>Wishlists</a>
                    </li>
                </>
            }
            <span className='border-b border-gray-200 my-[.5rem] block'></span>
            <li className='py-[0.5rem] pl-[1rem] cursor-pointer hover:bg-gray-100 transition-all duration-200'>
                <a href='#' className='text-sm tracking-tight'>Gift cards</a>
            </li>
            <li className='py-[0.5rem] pl-[1rem] cursor-pointer hover:bg-gray-100 transition-all duration-200'>
                <a href='#' className='text-sm tracking-tight'>Airbnb your home</a>
            </li>
            <li className='py-[0.5rem] pl-[1rem] cursor-pointer hover:bg-gray-100 transition-all duration-200'>
                <a href='#' className='text-sm tracking-tight'>Host an experience</a>
            </li>
            <li className='py-[0.5rem] pl-[1rem] cursor-pointer hover:bg-gray-100 transition-all duration-200'>
                <a href='#' className='text-sm tracking-tight'>Help center</a>
            </li>
            {isUserLogin && <li 
                                className='py-[0.5rem] pl-[1rem] cursor-pointer hover:bg-gray-100 transition-all duration-200'
                                onClick={() => {
                                    onLogout();
                                    toggleLoginModal(false);
                                    toggleDropdown();
                                }}
                            >
                                <a href='#' className='text-sm tracking-tight'>Log out</a>
                            </li>                
            }
        </ul>
    )
}

export default DropdownMenu;
