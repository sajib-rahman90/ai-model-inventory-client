import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Loading from "../../Components/Loading";
import { Link } from "react-router";

const MyPurchase = () => {
  const { user } = use(AuthContext);
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/my-purchase?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="w-11/12 mx-auto mt-7">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold">
          My Purchase
        </h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-8  gap-8">
          {models.map((model) => (
            <div
              key={model._id}
              className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl "
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-gray-800">
                  {model.name}
                </h3>

                <p className="text-sm text-gray-500">
                  <span className="font-medium text-gray-700">Framework:</span>{" "}
                  {model.framework}
                </p>

                <p className="text-sm text-gray-500 leading-relaxed">
                  <span className="font-medium text-gray-700">Use Case:</span>{" "}
                  {model.useCase}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  <span className="font-medium text-gray-700">Created By:</span>{" "}
                  {model.createdBy}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  <span className="font-medium text-gray-700">
                    Purchase By:
                  </span>{" "}
                  <span className="text-orange-500">{model.purchasedBy}</span>
                </p>

                <Link
                  to={`/models/${model._id}`}
                  className="btn w-full rounded-lg border-gray-300 btn-sm bg-linear-to-r from-orange-400 to-orange-500 text-white py-2.5 font-medium hover:from-orange-500 hover:to-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPurchase;
