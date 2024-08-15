import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen mt-16 px-4 md:px-0 md:w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
