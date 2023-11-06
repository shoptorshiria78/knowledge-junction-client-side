import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import ErrorPage from "../Page/ErrorPage";
import Home from "../Page/Home";
import LogIn from "../Page/LogIn";
import Register from "../Page/Register";
import CreateAssignment from "../Page/CreateAssignment";
import UpdateAssignment from "../Page/UpdateAssignment";
import AllAssignment from "../Page/AllAssignment";


const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch("http://localhost:5000/features")
            },
            {
                path:'/createAssignment',
                element:<CreateAssignment></CreateAssignment>
            },  
            {
                path:'/updateAssignment',
                element:<UpdateAssignment></UpdateAssignment>
            }, 
            {
                path:'/allAssignment',
                element:<AllAssignment></AllAssignment>,
                loader:()=>fetch("")
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