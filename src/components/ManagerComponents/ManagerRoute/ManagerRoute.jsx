import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useManager from "../../../hooks/custom/useManager";
import Swal from "sweetalert2";
import { useEffect } from "react";

const ManagerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();
  const [isManager, isManagerPending] = useManager();
  // console.log({
  //   isManager,
  //   isManagerPending,
  // });
  useEffect(() => {
    if (!isManagerPending && !loading) {
      if (!user?.email) {
        Swal.fire({
          title: "Login First To Access This Route",
          icon: "warning",
          timer: 1000,
        });
      } else if (!isManager && isManager !== undefined) {
        Swal.fire({
          title: "Only Managers Can Access This Route",
          icon: "warning",
          timer: 1000,
        });
      }
    }
  }, [isManager, loading, user, isManagerPending]);
  // console.log({isManager, isManagerPending});
  if (loading || isManagerPending) {
    return (
      <div className="flex w-full h-screen justify-center items-center">
        <div className="loading loading-xl"></div>
      </div>
    );
  }

  if (!user?.email) {
    return <Navigate to="/login" state={pathname} />;
  }
  if (isManager===false) {
    return <Navigate to="/" state={pathname} />;
  }
  return children;
};

export default ManagerRoute;
