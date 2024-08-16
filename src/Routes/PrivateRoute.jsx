import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { Commet } from "react-loading-indicators";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center my-10">
        <Commet
          color="#f0e430"
          size="large"
          text="loading"
          textColor="#78716C"
        />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <>
      <Navigate to="/login" state={{ from: location }} replace></Navigate>
    </>
  );
};

export default PrivateRoute;
