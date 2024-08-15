import { NavLink, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { LiaGem } from "react-icons/lia";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Successfully log out!",
          icon: "success",
          confirmButtonText: "Cool",
        });
        console.log("user log out");
      })

      .catch((error) => console.error(error));
  };

  const link = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "md:border-b-4 pb-2 border-black text-black font-bold"
            : "font-bold"
        }
        to="/surveys"
      >
        Add Product
      </NavLink>
    </>
  );
  return (
    <div className="shadow-sm px-4 md:px-8 lg:px-16 navbar z-10 bg-green-300 bg-opacity-90 fixed top-0">
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost text-xl">
          <img src="/images/1-removebg-preview.png" className="w-40" alt="" />
        </a>
      </div>
      <div className="navbar-center hidden md:flex">
        <label className="input flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </label>{" "}
      </div>

      <div className="navbar-end">
        {user ? (
          <>
            <div className="dropdown dropdown-end z-10">
              <div
                className="hover:tooltip tooltip-open hover:tooltip-bottom z-10"
                data-tip={user.displayName}
              >
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 border shadow rounded-full">
                    <img alt="user" src={user.photoURL} />
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="space-y-1 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <NavLink to="/dashboard" className={"hover:font-bold"}>
                  Dashboard
                </NavLink>
                <NavLink to="/dashboard" className={"hover:font-bold"}>
                  Add Product
                </NavLink>
                <NavLink
                  onClick={handleLogOut}
                  to="/"
                  className={"hover:font-bold"}
                >
                  Logout
                </NavLink>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="font-medium hover:text-gray-500 mr-3">
              <u>Login</u>
            </Link>
            <Link to="/register" className="font-medium hover:text-gray-500 ">
              <u>Sign Up</u>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
