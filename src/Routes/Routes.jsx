import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import ErrorPage from "../Page/ErrorPage";
import Home from "../Page/Home";
import LogIn from "../Page/LogIn";
import Register from "../Page/Register";


const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            
        ]
    }
    ,
    {
        path:'/logIn',
        element:<LogIn></LogIn>
    },
    {
        path:'/register',
        element:<Register></Register>
    }
])

export default Routes;