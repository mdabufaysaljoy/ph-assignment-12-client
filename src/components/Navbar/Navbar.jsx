import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useEmployee from "./../../hooks/custom/useEmployee";
import useManager from "../../hooks/custom/useManager";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, loading, logout } = useAuth();
  const [isEmployee, isEmployeePending] = useEmployee();
  const [isManager, isManagerPending] = useManager();
  // console.log("isManager: ",isManager, "isEmployee: ", isEmployee);
  const handleLogout = () => {
    Swal.fire({
      title: "Do you want to Logout?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire("Logout Success!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Logout Cancel", "", "info");
      }
    });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-gray-800 text-white" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            {loading ? (
              <div className="loading"></div>
            ) : user ? (
              isManagerPending && isEmployeePending ? (
                <div className="loading"></div>
              ) : isManager ? (
                <>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "bg-gray-800 text-white" : ""
                      }
                      to="/manager/asset-list"
                    >
                      Asset List
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "bg-gray-800 text-white" : ""
                      }
                      to="/manager/add-an-asset"
                    >
                      Add an Asset
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "bg-gray-800 text-white" : ""
                      }
                      to="/manager/all-requests"
                    >
                      All Requests
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "bg-gray-800 text-white" : ""
                      }
                      to="/manager/my-employee-list"
                    >
                      My Employee List
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "bg-gray-800 text-white" : ""
                      }
                      to="/manager/add-an-employee"
                    >
                      Add an Employee
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "bg-gray-800 text-white" : ""
                      }
                      to="/manager/profile"
                    >
                      Profile
                    </NavLink>
                  </li>
                </>
              ) : (
                isEmployee && (
                  <>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "bg-gray-800 text-white" : ""
                        }
                        to="/employee/request-for-an-asset"
                      >
                        Request for an Asset
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "bg-gray-800 text-white" : ""
                        }
                        to="/employee/my-team"
                      >
                        My Team
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "bg-gray-800 text-white" : ""
                        }
                        to="/employee/my-assets"
                      >
                        My Assets
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "bg-gray-800 text-white" : ""
                        }
                        to="/employee/profile"
                      >
                        Profile
                      </NavLink>
                    </li>
                  </>
                )
              )
            ) : (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "bg-gray-800 text-white" : ""
                    }
                    to="/join-as-employee"
                  >
                    Join as Employee
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "bg-gray-800 text-white" : ""
                    }
                    to="/join-as-manager"
                  >
                    Join as Manager
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          XYZ Corporation
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-gray-800 text-white" : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          {loading ? (
            <div className="loading"></div>
          ) : user ? (
            isManagerPending && isEmployeePending ? (
              <div className="loading"></div>
            ) : isManager ? (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "bg-gray-800 text-white" : ""
                    }
                    to="/manager/asset-list"
                  >
                    Asset List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "bg-gray-800 text-white" : ""
                    }
                    to="/manager/add-an-asset"
                  >
                    Add an Asset
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "bg-gray-800 text-white" : ""
                    }
                    to="/manager/all-requests"
                  >
                    All Requests
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "bg-gray-800 text-white" : ""
                    }
                    to="/manager/my-employee-list"
                  >
                    My Employee List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "bg-gray-800 text-white" : ""
                    }
                    to="/manager/add-an-employee"
                  >
                    Add an Employee
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "bg-gray-800 text-white" : ""
                    }
                    to="/manager/profile"
                  >
                    Profile
                  </NavLink>
                </li>
              </>
            ) : (
              isEmployee && (
                <>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "bg-gray-800 text-white" : ""
                      }
                      to="/employee/request-for-an-asset"
                    >
                      Request for an Asset
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "bg-gray-800 text-white" : ""
                      }
                      to="/employee/my-team"
                    >
                      My Team
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "bg-gray-800 text-white" : ""
                      }
                      to="/employee/my-assets"
                    >
                      My Assets
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "bg-gray-800 text-white" : ""
                      }
                      to="/employee/profile"
                    >
                      Profile
                    </NavLink>
                  </li>
                </>
              )
            )
          ) : (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-gray-800 text-white" : ""
                  }
                  to="/join-as-employee"
                >
                  Join as Employee
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-gray-800 text-white" : ""
                  }
                  to="/join-as-manager"
                >
                  Join as Manager
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {loading ? (
          <div className="loading"></div>
        ) : user ? (
          <button onClick={handleLogout} className="btn btn-secondary">
            Logout
          </button>
        ) : (
          <NavLink to="/login" className="btn btn-primary">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
