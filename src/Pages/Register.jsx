import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { updateProfile } from "firebase/auth";
import useAuth from "../Hooks/useAuth";

const Register = () => {
  const { createUser } = useAuth();
  const [registerError, setRegisterError] = useState("");
  const [show, setShow] = useState("false");
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (e) => {
    e.preventDefault();
    const role = "user";
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 Characters");

      return;
    }
    if (!/^(?=.*[A-Z]).+$/.test(password)) {
      setRegisterError(
        "Password should be contain at least one uppercase letter"
      );
      return;
    }
    if (!/^(?=.*[a-z]).+$/.test(password)) {
      setRegisterError(
        "Password should be contain at least one lowercase letter"
      );
      return;
    }
    if (!/^(?=.*[0-9]).+$/.test(password)) {
      setRegisterError(
        "Password should be contain at least one numeric character"
      );
      return;
    }
    if (!/[\W_]/.test(password)) {
      setRegisterError(
        "Password should contain at least one special character"
      );
      return;
    }
    setRegisterError("");

    // console.log(name, email, password, photoURL, role);
    createUser(email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: name,
          photoURL: photoURL,
        });
        // console.log(userCredential.user);
        const addNewUser = { name, email, photoURL, role, password };

        const url = "https://radiant-server-opal.vercel.app/user";
        // send data to the server

        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(addNewUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              e.target.reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully register a user",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(from, { replace: true });
            }
          });
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  return (
    <div className="hero md:min-h-screen rounded-t-md">
      <Helmet>
        <title>Radiant | Register</title>
      </Helmet>
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-2xl md:text-5xl font-bold">
            Please Register here
          </h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm border border-black shadow-2xl my-2 bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered border-black"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Link</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Photo link"
                className="input input-bordered border-black"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered border-black"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={show ? "password" : "text"}
                name="password"
                placeholder="password"
                className="input input-bordered border-black"
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute top-12 right-2"
              >
                {show ? (
                  <FaRegEyeSlash className="text-xl text-black" />
                ) : (
                  <FaRegEye className="text-xl text-black" />
                )}
              </span>
            </div>
            {registerError && (
              <p className="text-yellow-500 text-xl">{registerError}</p>
            )}
            <div className="form-control mt-6">
              <button className="btn bg-black text-xl text-white">
                <span className="">Register</span>
              </button>
            </div>
          </form>

          <p className="text-center px-2">
            Allready have an account ? please
            <Link to="/login">
              <button className="btn btn-active text-black btn-link">
                Login
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
