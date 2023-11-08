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
import PrivateRoute from "../PrivateRoute/PrivateRoute"




const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("https://knowledge-junction-server-side.vercel.app/api/v1/features")
            },
            {
                path: '/createAssignment',
                element: <PrivateRoute>
                    <CreateAssignment></CreateAssignment>
                </PrivateRoute>
            },
            {
                path: '/updateAssignment/:id',
                element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
                loader: ({ params }) => fetch(`https://knowledge-junction-server-side.vercel.app/api/v1/assignment/${params.id}`)

            },
            {
                path: '/viewAssignment/:id',
                element: <PrivateRoute><ViewAssignment></ViewAssignment></PrivateRoute>,
                loader: ({ params }) => fetch(`https://knowledge-junction-server-side.vercel.app/api/v1/assignment/${params.id}`)

            },
            {
                path: '/allAssignment',
                element: <AssignmentPage></AssignmentPage>,
                loader: () => fetch("https://knowledge-junction-server-side.vercel.app/api/v1/allAssignmentCount")

            },
            {
                path: '/submittedPendingAssignment',
                element: <PrivateRoute><SubmittedPage></SubmittedPage></PrivateRoute>,
            },
            {
                path: '/myAssignment',
                element: <PrivateRoute><MySubmissionPage></MySubmissionPage></PrivateRoute>,
            },
        ]
    }
    ,
    {
        path: '/logIn',
        element: <LogIn></LogIn>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
])

export default Routes;