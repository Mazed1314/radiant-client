import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
