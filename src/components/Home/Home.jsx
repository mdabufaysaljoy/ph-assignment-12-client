import About from "../About/About";
import Bannar from "../Bannar/Bannar";
import Packages from "../Packages/Packages";
import useAuth from "./../../hooks/useAuth";
import useManager from "./../../hooks/custom/useManager";
import useEmployee from "./../../hooks/custom/useEmployee";
import PendingRequests from "../ManagerComponents/PendingRequests/PendingRequests";
import TopMostRequestedItems from "../ManagerComponents/TopMostRequestedItems/TopMostRequestedItems";
import LimitedStockItems from "../ManagerComponents/LimitedStockItems/LimitedStockItems";
import PieChartStats from "../ManagerComponents/PieChartStats/PieChartStats";
import MyPendingRequests from "../EmployeeComponents/MyPendingRequests/MyPendingRequests";
import MyMonthlyRequests from "../EmployeeComponents/MyMonthlyRequests/MyMonthlyRequests";

const Home = () => {
  const { user, loading } = useAuth();
  const [isManager, isManagerPending] = useManager();
  const [isEmployee, isEmployeeLoading] = useEmployee();
  // console.log(loading, isManagerPending, isEmployeeLoading);
  if (loading || isManagerPending || isEmployeeLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="loading loading-xl"></div>
      </div>
    );
  }
  if (!user) {
    return (
      <div>
        <Bannar />
        <About />
        <Packages />
      </div>
    );
  }
  
  if (isManager) {
    return (
      <div className="max-w-7xl mx-auto">
        <PendingRequests />
        <TopMostRequestedItems />
        <LimitedStockItems />
        <PieChartStats />
      </div>
    );
  }
  if (isEmployee) {
    return (
      <div className="max-w-7xl mx-auto">
        <MyPendingRequests />
        <MyMonthlyRequests />
      </div>
    );
  }
};

export default Home;
