import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const SideBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
                {/* Sidebar content here */}
                <NavLink to='/' className={({ isActive }) =>
                        isActive ? " text-base bg-emerald-400 text-white px-3 py-3 rounded-xl " : " text-base bg-green-600 text-white px-3 py-3 rounded-xl "
                    }>Home</NavLink>
                    <NavLink to='/allAssignment' className={({ isActive }) =>
                        isActive ? "text-base bg-emerald-400 text-white px-3 py-3 rounded-xl " : "text-base bg-green-600 text-white px-3 py-3 rounded-xl"
                    }>All Assignment</NavLink>
                    {
                        user?.email && <NavLink to='/createAssignment' className={({ isActive }) =>
                            isActive ? "text-base bg-emerald-400 text-white px-3 py-3 rounded-xl" : "text-base bg-green-600 text-white px-3 py-3 rounded-xl"
                        }>Create Assignment</NavLink>
                    }
                    {
                        user?.email && <NavLink to='/submittedPendingAssignment' className={({ isActive }) =>
                            isActive ? "text-base bg-emerald-400 text-white px-3 py-3 rounded-xl" : "text-base bg-green-600 text-white px-3 py-3 rounded-xl"
                        }>Submitted Assignment</NavLink>

                    }
                    {
                        user?.email && <NavLink to='/myAssignment' className={({ isActive }) =>
                            isActive ? "text-base bg-emerald-400 text-white px-3 py-3 rounded-xl" : "text-base bg-green-600 text-white px-3 py-3 rounded-xl"
                        }>My Assignment</NavLink>
                    }

                    {
                        user ? <button onClick={handleLogOut} className="btn bg-green-500 text-white btn-md">Log Out </button>
                            : <NavLink to='/logIn' className={({ isActive }) =>
                                isActive ? "text-base bg-emerald-400 text-white px-3 py-3 rounded-xl" : "text-base bg-green-600 text-white px-3 py-3 rounded-xl"
                            }>LogIn </NavLink>
                    }



            </ul>
        </div>
    );
};

export default SideBar;