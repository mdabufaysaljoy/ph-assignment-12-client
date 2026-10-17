import { Outlet } from "react-router-dom";

const Employee = () => {
  console.log("employee accessed");
  return <Outlet />;
};

export default Employee;
