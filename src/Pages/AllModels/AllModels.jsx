import React from "react";
import { useLoaderData } from "react-router";
import AllModelsCard from "../../Components/AllModelsCard";

const AllModels = () => {
  const models = useLoaderData();
  console.log(models);
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-center text-4xl font-extrabold">All Models</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-8  gap-8">
        {models.map((model) => (
          <AllModelsCard key={model._id} model={model} />
        ))}
      </div>
    </div>
  );
};

export default AllModels;
