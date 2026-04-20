import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Register = () => {
  const { createUserFunc, signInWithGoogleFunc, user } = use(AuthContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, photoURL, email, password);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      // toast error
      toast.error(
        "Password must contain at least 1 uppercase, 1 lowercase and be 6+ characters long",
      );
      return;
    }

    createUserFunc(email, password)
      .then((res) => {
        console.log(res.user);
        e.target.reset();
        navigate(location.state || "/");
        toast.success("Ragestation is Succesfull");
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorMessage, errorCode);
        toast.error("Email already is used");
      });
  };

  const handleGoogleSignin = () => {
    // console.log("butoon is clicked");
    signInWithGoogleFunc()
      .then((res) => {
        console.log(res);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-50 to-white pt-4 pb-4">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl p-6 sm:p-8">
          <form onSubmit={handleRegister} className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800">
              Create Account
            </h2>
            <p className="text-sm text-gray-500 text-center">
              Sign up to get started
            </p>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 
            focus:ring-2 focus:ring-orange-400 focus:border-orange-400 
            outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 
            focus:ring-2 focus:ring-orange-400 focus:border-orange-400 
            outline-none transition"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Photo URL
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="https://your-image-link.com"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 
            focus:ring-2 focus:ring-orange-400 focus:border-orange-400 
            outline-none transition"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 
            focus:ring-2 focus:ring-orange-400 focus:border-orange-400 
            outline-none transition"
              />

              <span
                onClick={() => setShow(!show)}
                className="absolute right-2 top-9 cursor-pointer z-20"
              >
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 
          text-white py-2.5 rounded-lg font-medium transition shadow-md"
            >
              Create Account
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-xs text-gray-400">OR</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Google Signup */}
            <button
              onClick={handleGoogleSignin}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2.5 hover:bg-gray-50 transition"
            >
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
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-orange-500 font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
