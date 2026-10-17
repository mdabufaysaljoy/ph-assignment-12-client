import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import JoinAsEmployee from "../components/EmployeeComponents/JoinAsEmployee/JoinAsEmployee";
import Login from "../components/Login/Login";
import NotFound from "../components/Error/NotFound";
import EmployeeRoute from "../components/EmployeeComponents/EmployeeRoute/EmployeeRoute";
import MyAssets from "../components/EmployeeComponents/MyAssets/MyAssets";
import Employee from "../components/EmployeeComponents/Employee/Employee";
import ManagerRoute from "../components/ManagerComponents/ManagerRoute/ManagerRoute";
import Manager from "../components/ManagerComponents/Manager/Manager";
import AssetList from "../components/ManagerComponents/AssetList/AssetList";
import ManagerProfile from "../components/ManagerComponents/Profile/ManagerProfile";
import MyTeam from "../components/EmployeeComponents/MyTeam/MyTeam";
import RequestForAnAsset from "../components/EmployeeComponents/RequestForAnAsset/RequestForAnAsset";
import AddAnEmployee from "../components/ManagerComponents/AddAnEmployee/AddAnEmployee";
import AllRequests from "../components/ManagerComponents/AllRequests/AllRequests";
import AddAnAsset from "../components/ManagerComponents/AddAnAsset/AddAnAsset";
import MyEmployeeList from "../components/ManagerComponents/MyEmployeeList/MyEmployeeList";
import JoinAsManager from "./../components/ManagerComponents/JoinAsManager/JoinAsManager";
import Pricing from "../components/ManagerComponents/Pricing/Pricing";
import ManagerProfileUpdate from "../components/ManagerComponents/Profile/ManagerProfileUpdate";
import EmployeeProfile from "../components/EmployeeComponents/Profile/EmployeeProfile";
import EmployeeUpdateProfile from "../components/EmployeeComponents/Profile/EmployeeUpdateProfile";
import Payment from "../components/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "join-as-employee", element: <JoinAsEmployee /> },
      { path: "join-as-manager", element: <JoinAsManager /> },
      { path: "login", element: <Login /> },
      {
        path: "manager",
        element: (
          <ManagerRoute>
            <Manager />
          </ManagerRoute>
        ),
        children: [
          {
            path: "asset-list",
            element: <AssetList />,
          },
          {
            path: "profile",
            element: <ManagerProfile />,
          },
          {
            path: "add-an-employee",
            element: <AddAnEmployee />,
          },
          {
            path: "all-requests",
            element: <AllRequests />,
          },
          {
            path: "add-an-asset",
            element: <AddAnAsset />,
          },
          {
            path: "my-employee-list",
            element: <MyEmployeeList />,
          },
          {
            path: "pricing",
            element: <Pricing />,
          },
          {
            path: "profile-update",
            element: <ManagerProfileUpdate />,
          },{
            path: "payment",
            element: <Payment />
          }
        ],
      },
      {
        path: "employee",
        element: (
          <EmployeeRoute>
            <Employee />
          </EmployeeRoute>
        ),
        children: [
          {
            path: "my-assets",
            element: <MyAssets />,
          },
          {
            path: "profile",
            element: <EmployeeProfile />,
          },
          {
            path: "profile-update",
            element: <EmployeeUpdateProfile />,
          },
          {
            path: "my-team",
            element: <MyTeam />,
          },
          {
            path: "request-for-an-asset",
            element: <RequestForAnAsset />,
          },
        ],
      },
    ],
  },
]);

export default router;
