import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen mt-14">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
