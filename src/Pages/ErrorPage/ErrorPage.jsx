import React from "react";
import error_page from "../../assets/error_page.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <div className=" flex flex-col items-center justify-center p-5 lg:p-20 md:p-10  space-y-3">
        <div className="w-2/3 h-2/3">
          <img src={error_page} alt="" />
        </div>
        <div className="text-center space-y-3">
          <h1 className="text-5xl font-semibold text-[#001931]">
            Oops! This AI model doesn’t exist.
          </h1>

          <Link to="/">
            <button className="btn rounded-lg border-gray-300  btn-sm bg-linear-to-r from-orange-400 to-orange-500 text-white p-3.5  font-medium ">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
