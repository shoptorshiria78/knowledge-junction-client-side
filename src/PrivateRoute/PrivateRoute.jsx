import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Lottie from "lottie-react";
import loading from '../assets/loding animation.json'
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, isLoading} = useContext(AuthContext);
    const location = useLocation()

    if(isLoading){
        return <Lottie className="max-h-screen" animationData={loading}></Lottie>
    }
    if(user){
        return children
   }
   return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRoute.propTypes ={
    children : PropTypes.node
 }

export default PrivateRoute;