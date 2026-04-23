import React from "react";

const AllModelsCard = ({ model }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={model.image}
          alt={model.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-semibold text-gray-800">{model.name}</h3>

        <p className="text-sm text-gray-500">
          <span className="font-medium text-gray-700">Framework:</span>{" "}
          {model.framework}
        </p>

        <p className="text-sm text-gray-500 leading-relaxed">
          <span className="font-medium text-gray-700">Use Case:</span>{" "}
          {model.useCase}
        </p>

        {/* Button */}
        <button className="btn w-full rounded-lg border-gray-300 btn-sm bg-linear-to-r from-orange-400 to-orange-500 text-white py-2.5 font-medium hover:from-orange-500 hover:to-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default AllModelsCard;
