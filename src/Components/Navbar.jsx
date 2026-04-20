import React, { use } from "react";
import { Link } from "react-router";
import { NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { IoLogIn, IoLogOut } from "react-icons/io5";

const Navbar = () => {
  const { user, signOutUserFunc } = use(AuthContext);
  // console.log(user);
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
                <NavLink to={"/"}>Home</NavLink>
              </li>

              <li>
                <NavLink to={"/models"}>AllModels</NavLink>
              </li>
            </ul>
          </div>
          <a className="text-[#f96b33]  text-xl">Ai-Inventory</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-cyan-300" : "")}
                to={"/"}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-cyan-300" : "")}
                to={"/models"}
              >
                All Models
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-cyan-300" : "")}
                to={"/add-model"}
              >
                Add Model
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
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
                className="menu  menu-sm dropdown-content bg-linear-to-r from-orange-100 to-orange-200 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <div className=" pb-3 border-b border-b-gray-200">
                  <li className="text-sm font-bold">{user.displayName}</li>
                  <li className="text-xs">{user.email}</li>
                </div>

                <li>
                  <button
                    onClick={signOutUserFunc}
                    className="btn rounded-lg border-gray-300  btn-sm bg-linear-to-r from-orange-400 to-orange-500 text-white py-2.5  font-medium "
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="btn rounded-lg border-gray-300  btn-sm bg-linear-to-r from-orange-400 to-orange-500 text-white py-2.5  font-medium "
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
