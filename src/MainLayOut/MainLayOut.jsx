import { Outlet } from "react-router-dom";
import NavBar from "../SharedComponent/NavBar";
import SideBar from "../SharedComponent/SideBar";
import Footer from "../SharedComponent/Footer";


const MainLayOut = () => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <NavBar></NavBar>
                {/* Page content here */}
               <Outlet></Outlet>
               <Footer></Footer>
            </div>
            {/* side bar here */}
            <SideBar></SideBar>
        </div>
    );
};

export default MainLayOut;