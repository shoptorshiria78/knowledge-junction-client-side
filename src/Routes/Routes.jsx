import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import ErrorPage from "../Page/ErrorPage";
import Home from "../Page/Home";
import LogIn from "../Page/LogIn";
import Register from "../Page/Register";
import CreateAssignment from "../Page/CreateAssignment";
import UpdateAssignment from "../Page/UpdateAssignment";
import ViewAssignment from "../Page/ViewAssignment";
import SubmittedPage from "../Page/SubmittedPage";
import MySubmissionPage from "../Page/MySubmissionPage";
import AssignmentPage from "../Page/AssignmentPage";




const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch("http://localhost:5000/api/v1/features")
            },
            {
                path:'/createAssignment',
                element:<CreateAssignment></CreateAssignment>
            },  
            {
                path:'/updateAssignment/:id',
                element:<UpdateAssignment></UpdateAssignment>,
                loader:({params})=>fetch(`http://localhost:5000/api/v1/assignment/${params.id}`)

            }, 
            {
                path:'/viewAssignment/:id',
                element:<ViewAssignment></ViewAssignment>,
                loader:({params})=>fetch(`http://localhost:5000/api/v1/assignment/${params.id}`)

            }, 
            {
                path:'/allAssignment',
                element:<AssignmentPage></AssignmentPage>,
                loader:()=>fetch("http://localhost:5000/api/v1/allAssignmentCount")
               
            },  
            {
                path:'/submittedPendingAssignment',
                element:<SubmittedPage></SubmittedPage>,
            },          
            {
                path:'/myAssignment',
                element:<MySubmissionPage></MySubmissionPage>,
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