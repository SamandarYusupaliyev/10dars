import {signInWithPopup, GoogleAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";


function useSignup() {
    const [user,setUser]=useState(null)
    const [error,setError]=useState(null)
    const signupWihtGoogle =()=>{
    const provider =new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      setUser(user);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage);
    });
  }
  return {signupWihtGoogle,user,error}
}

export {useSignup}