import React from "react";
import { Link, useLoaderData } from "react-router";

const ModelDetails = () => {
  const data = useLoaderData();
  const model = data.result;
  return (
    <div className="min-h-screen  flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-1 h-72 lg:h-full relative">
            <img
              src={model.image || "https://via.placeholder.com/600x400"}
              alt={model.name || "Model image"}
              className="w-full h-full object-cover"
              loading="lazy"
            />

            <div className="absolute top-4 left-4 bg-black/70 text-white text-xl px-3 py-1 rounded-full">
              {model.framework || "Framework"}
            </div>
          </div>

          <div className="lg:col-span-2 p-6 md:p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
                {model.name || "Model Name"}
              </h2>

              <p className="text-gray-500 text-sm mb-6">
                High quality AI model ready for real-world applications
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-xs text-gray-400 mb-1">Use Case</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {model.useCase || "Not specified"}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-xs text-gray-400 mb-1">Dataset</p>
                  <p className="text-sm text-gray-700">
                    {model.dataset || "Not specified"}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs text-gray-400 mb-1">Description</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {model.description || "No description available"}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-lg text-sm font-medium">
                  Purchased {model.purchased ?? 0} times
                </div>
              </div>

              <div className="flex gap-3 justify-between w-full md:w-auto">
                {/* Button */}
                <Link
                  to={`/update-model/${model._id}`}
                  className="px-6 py-3 rounded-xl bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-all duration-300 shadow-md"
                >
                  Edit
                </Link>
                <Link
                  // to={`/models/${model._id}`}
                  className="px-6 py-3 rounded-xl bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-all duration-300 shadow-md"
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;
