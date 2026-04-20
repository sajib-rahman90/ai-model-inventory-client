import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-gray-600 text-6xl md:text-base">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Loading;
