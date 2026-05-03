import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutUserFunc } = use(AuthContext);
  // console.log(user);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSignOut = () => {
    signOutUserFunc()
      .then(() => {
        toast.success("Sign Out Succesfull.");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };
  return (
    <div>
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-md text-orange-500 font-semibold"
                      : "text-md font-semibold"
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-md text-orange-500 font-semibold"
                      : "text-md font-semibold"
                  }
                  to={"/models"}
                >
                  All Models
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-md text-orange-500 font-semibold"
                      : "text-md font-semibold"
                  }
                  to={"/add-model"}
                >
                  Add Model
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-md text-orange-500 font-semibold"
                      : "text-md font-semibold"
                  }
                  to={"/my-models"}
                >
                  My Models
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-md text-orange-500 font-semibold"
                      : "text-md font-semibold"
                  }
                  to={"/purchase"}
                >
                  My Purchase
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                src="/AI Inventory.svg"
                alt="AI Model Logo"
              />

              <span className="text-xl font-semibold text-orange-500">
                AI Model
              </span>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[16px] text-orange-500 font-semibold"
                    : "text-[16px] font-semibold"
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[16px] text-orange-500 font-semibold"
                    : "text-[16px] font-semibold"
                }
                to={"/models"}
              >
                All Models
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[16px] text-orange-500 font-semibold"
                    : "text-[16px] font-semibold"
                }
                to={"/add-model"}
              >
                Add Model
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <label className="toggle text-base-content">
            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              value="synthwave"
              defaultChecked={localStorage.getItem("theme") === "dark"}
              className="theme-controller"
            />

            <svg
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>

            <svg
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>
          {user ? (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 border-2 border-orange-300 rounded-full">
                  <img
                    alt=""
                    src={
                      user.photoURL ||
                      "https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4855.jpg"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu  menu-sm dropdown-content bg-linear-to-r from-gray-100 to-orange-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <div className=" pb-3 border-b border-b-gray-200">
                  <li className="text-sm font-bold">{user.displayName}</li>
                  <li className="text-xs">{user.email}</li>
                </div>

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-md text-orange-500 font-semibold"
                        : "text-md font-semibold"
                    }
                    to={"/purchase"}
                  >
                    My Purchase
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-md text-orange-500 font-semibold"
                        : "text-md font-semibold"
                    }
                    to={"/my-models"}
                  >
                    My Models
                  </NavLink>
                </li>

                <li>
                  <button
                    onClick={handleSignOut}
                    className="btn rounded-lg mt-1.5 btn-sm bg-linear-to-r from-orange-400 to-orange-500 text-white py-2.5 font-medium hover:from-orange-500 hover:to-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 "
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="btn btn-sm rounded-lg bg-linear-to-r from-orange-400 to-orange-500 text-white py-2.5 font-medium hover:from-orange-500 hover:to-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-center"
            >
              {" "}
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
