import React from "react";
import AboutAiModels from "../../Components/AboutAiModels";
import FeaturedAiModels from "../../Components/FeaturedAiModels";
import { useLoaderData } from "react-router";

const Home = () => {
  const models = useLoaderData();
  return (
    <div>
      <div className="w-11/12 mx-auto mt-7">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold">
          Featured AI Models
        </h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-8  gap-8">
          {models.map((model) => (
            <FeaturedAiModels key={model._id} model={model} />
          ))}
        </div>
      </div>

      <AboutAiModels />
    </div>
  );
};

export default Home;
