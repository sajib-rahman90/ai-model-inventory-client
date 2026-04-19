import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-50 to-white px-4">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl p-6 sm:p-8">
          <form className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800">
              Welcome Back
            </h2>
            <p className="text-sm text-gray-500 text-center">
              Login to continue
            </p>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 
            focus:ring-2 focus:ring-orange-400 focus:border-orange-400 
            outline-none transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 
            focus:ring-2 focus:ring-orange-400 focus:border-orange-400 
            outline-none transition"
              />
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center text-sm">
              <button type="button" className="text-orange-500 hover:underline">
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 
          text-white py-2.5 rounded-lg font-medium transition shadow-md"
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-xs text-gray-400">OR</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Google Login */}
            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2.5 hover:bg-gray-50 transition">
              <svg width="18" height="18" viewBox="0 0 48 48">
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.4 0 6.4 1.2 8.8 3.2l6.6-6.6C35.5 2.5 30.2 0 24 0 14.6 0 6.4 5.5 2.5 13.5l7.7 6C12.2 13.4 17.6 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.1 24.5c0-1.6-.1-2.7-.4-3.9H24v7.4h12.7c-.3 2-1.6 5-4.4 7l6.9 5.3c4-3.7 6.9-9.1 6.9-15.8z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.2 28.5c-.5-1.4-.8-2.9-.8-4.5s.3-3.1.8-4.5l-7.7-6C.9 16.4 0 20.1 0 24s.9 7.6 2.5 10.5l7.7-6z"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.5 0 12-2.1 16-5.7l-6.9-5.3c-1.9 1.3-4.5 2.2-9.1 2.2-6.4 0-11.8-3.9-13.8-9.5l-7.7 6C6.4 42.5 14.6 48 24 48z"
                />
              </svg>

              <span className="text-sm font-medium text-gray-700">
                Continue with Google
              </span>
            </button>

            <p className="text-sm text-center text-gray-500">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-orange-500 font-medium hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
