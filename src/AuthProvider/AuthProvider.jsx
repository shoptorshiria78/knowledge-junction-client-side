import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import {getAuth} from "firebase/auth"
import { app } from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

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
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email:userEmail}
            setUser(currentUser)
            setIsLoading(false)
            if(currentUser){
                 axios.post("https://knowledge-junction-server-side.vercel.app/api/v1/user/jwt",loggedUser, {withCredentials: true})
                 .then(res=>{
                    console.log(res.data)
                 })
            }
            else{
                axios.post("https://knowledge-junction-server-side.vercel.app/api/v1/user/logOut",loggedUser,{withCredentials:true})
                .then(res=>{
                    console.log(res.data)
                })
            }
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