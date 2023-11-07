import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import logo from "../assets/logo.avif"


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="w-full mx-w-[1200px] navbar bg-emerald-300">
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
            <div className="flex-1 px-2 mx-2 flex justify-between ">
                <div className="flex items-center">
                    <img className="w-16 h-16 rounded-full" src={logo} alt="" />
                    <h1 className="text-2xl text-white font-bold ml-2" >Knowledge <br />Junction</h1 >
                </div>
                {
                    user &&
                    <div>
                        <img className="w-8 md:w-12 h-8 md:h-12 rounded-full border-2 border-[#E55473]" src={user?.photoURL} alt="" />
                        <p className="text-fuchsia-600 text-sm md:text-base">{user?.displayName}</p>
                    </div>
                }

            </div>
            <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal space-x-4">
                    {/* Navbar menu content here */}
                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? "btn bg-red-500 text-white btn-md" : "btn bg-green-500 text-white btn-md"
                    }>Home</NavLink>
                    <NavLink to='/allAssignment' className={({ isActive }) =>
                        isActive ? "btn bg-red-500 text-white btn-md" : "btn bg-green-500 text-white btn-md"
                    }>All Assignment</NavLink>
                    <NavLink to='/createAssignment' className={({ isActive }) =>
                        isActive ? "btn bg-red-500 text-white btn-md" : "btn bg-green-500 text-white btn-md"
                    }>Create Assignment</NavLink>
                    <NavLink to='/submittedPendingAssignment' className={({ isActive }) =>
                        isActive ? "btn bg-red-500 text-white btn-md" : "btn bg-green-500 text-white btn-md"
                    }>Submitted Assignment</NavLink>
                    
                    {
                        user?.email && <NavLink to='/myAssignment' className={({ isActive }) =>
                            isActive ? "btn bg-red-500 text-white btn-md" : "btn bg-green-500 text-white btn-md"
                        }>My Assignment</NavLink>
                    }

                    {
                        user ? <button onClick={handleLogOut} className="btn bg-green-500 text-white btn-md">Log Out </button>
                            : <NavLink to='/logIn' className={({ isActive }) =>
                                isActive ? "btn bg-red-500 text-white btn-md" : "btn bg-green-500 text-white btn-md"
                            }>LogIn </NavLink>
                    }



                </ul>
            </div>
        </div>
    );
};

export default NavBar;