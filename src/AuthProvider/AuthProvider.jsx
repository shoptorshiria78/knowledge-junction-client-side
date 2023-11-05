import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import {getAuth} from "firebase/auth"
import { app } from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ( {children}) => {
     
    const auth = getAuth(app)
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const logIn =(email, password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const register = ( email, password )=>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password )
    }

    const logOut = ()=>{
        setIsLoading(true)
        return signOut(auth)
    }

    const googleLogIn =()=>{
        setIsLoading(true)
        return signInWithPopup(auth,provider )
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setIsLoading(false)
        })
        return ()=>{
           return unSubscribe()
        }
    },[])

    const authInfo = {logIn, register, isLoading, user, logOut, googleLogIn}
    return (
        <AuthContext.Provider value={authInfo}>           
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
   
    children: PropTypes.node,
}

export default AuthProvider;