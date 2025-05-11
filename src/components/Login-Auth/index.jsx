import React from "react";
// import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../services/firebase';
import { NavLink, useNavigate } from "react-router-dom";

const LoginAuth = ({ email, setEmail, password, setPassword, toggleLoginModal }) => {
    const navigate = useNavigate();

    const onLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate("/");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }

    return (
        <form>
            <div className='flex flex-col gap-4 w-'>
                <div>
                    <input 
                        type="email" 
                        id='email'
                        name='email' 
                        pattern=".+@example\.com" 
                        placeholder='Email' 
                        required 
                        className='px-[1rem] py-[.8rem] rounded-xl border border-font-grey w-full'
                        onChange={(e)=>setEmail(e.target.value)} 
                    />
                </div>
                <div>
                    <input
                        type="password"  
                        id="password"
                        name="password"    
                        placeholder="Password"
                        required
                        className='px-[1rem] py-[.8rem] rounded-xl border border-font-grey w-full' 
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input 
                        type="submit" 
                        value='Continue' 
                        className='font-semibold text-white px-[1rem] py-[.8rem] rounded-xl bg-theme cursor-pointer w-full' 
                        onClick={() => {
                            onLogin();
                            toggleLoginModal();
                        }}
                    />
                </div>
            </div>
        </form>
    )
};

export default LoginAuth;