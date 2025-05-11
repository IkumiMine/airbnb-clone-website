import React from "react";
import { signOut } from "firebase/auth";
import { auth } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';

const LogoutAuth = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    signOut(auth).then(() => {
      //sign-out successful
      navigate("/");
      console.log("signed out successfully");
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    })
  }

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default LogoutAuth;