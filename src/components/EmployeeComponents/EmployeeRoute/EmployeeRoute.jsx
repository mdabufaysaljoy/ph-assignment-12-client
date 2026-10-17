import { Navigate, useLocation } from "react-router-dom";
import useEmployee from "../../../hooks/custom/useEmployee";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useEffect } from "react";

const EmployeeRoute = ({ children }) => {
  // console.log("employee route accessed");
  const { user, loading } = useAuth();
  const [isEmployee, isEmployeePending] = useEmployee();
  const { pathname } = useLocation();
  console.log({isEmployee,isEmployeePending});
  useEffect(() => {
    if (!loading && !isEmployeePending) {
      if (!user) {
        Swal.fire({
          title: "Login First To Access This Route",
          icon: "warning",
          timer: 1000,
        });
      } else if (!isEmployee && isEmployee !== undefined) {
        Swal.fire({
          title: "Only Emplyees Can Access This Route",
          icon: "warning",
          timer: 1000,
        });
      }
    }
  }, [loading, isEmployeePending, user, isEmployee]);
  console.log({
    user: user?.email,
    loading,
    isEmployeePending,
    isEmployee,
  });
  if (loading || isEmployeePending) {
    return (
      <div className="flex w-full h-screen justify-center items-center">
        <div className="loading loading-xl"></div>
      </div>
    );
  }
  console.log("isEmployee in employee route: ", isEmployee);
  if (!user?.email) {
    return <Navigate to="/login" state={pathname} />;
  }
  if (isEmployee===false) {
    return <Navigate to="/" state={pathname} />;
  }
  return children;
};

export default EmployeeRoute;
