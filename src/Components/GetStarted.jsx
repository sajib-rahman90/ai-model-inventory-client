import React from "react";
import { Link } from "react-router";

const GetStarted = () => {
  return (
    <div className="w-full bg-linear-to-r from-orange-50 via-white to-orange-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-snug">
              Start Managing Your{" "}
              <span className="text-orange-500">AI Models</span> Today
            </h2>

            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              Organize, track, and explore your AI models in one place. Create
              your account or log in to unlock full control and streamline your
              workflow.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link to="/register" className="w-full sm:w-auto">
              <button
                className="w-full px-6 py-3 rounded-lg bg-orange-500 text-white font-medium 
                hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Get Started
              </button>
            </Link>

            <Link to="/login" className="w-full sm:w-auto">
              <button
                className="w-full px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium 
                hover:bg-gray-100 transition-all duration-300"
              >
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
