import { NavLink } from "react-router-dom";


const SideBar = () => {
    return (
        <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    <NavLink to='/' className={({ isActive }) =>
     isActive ? "btn bg-red-500 text-white btn-md" : "btn bg-green-500 text-white btn-md"
  }>Home</NavLink>
                            <NavLink to='/allAssignment' className={({ isActive }) =>
     isActive ? "btn bg-red-500 text-white btn-md" : "btn bg-green-500 text-white btn-md"
  }>All Assignment</NavLink>
                            <NavLink to='/myAssignment' className={({ isActive }) =>
     isActive ? "btn bg-red-500 text-white btn-md" : "btn bg-green-500 text-white btn-md"
  }>My Assignment</NavLink>
                            <NavLink to='/logIn'className={({ isActive }) =>
     isActive ? "btn bg-red-500 text-white btn-md" : "btn bg-green-500 text-white btn-md"
  }>LogIn </NavLink>
                </ul>
            </div>
    );
};

export default SideBar;