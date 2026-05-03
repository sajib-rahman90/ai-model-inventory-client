import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AllModelsCard from "../../Components/AllModelsCard";
import Loading from "../../Components/Loading";

const AllModels = () => {
  const data = useLoaderData();
  const [models, setModels] = useState(data);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    setLoading(true);

    fetch(`http://localhost:3000/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
        setLoading(false);
      });
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="w-11/12 mx-auto mt-7">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold">
        All Models
      </h1>

      <form
        onSubmit={handleSearch}
        className=" mt-5 mb-10 flex gap-2 justify-center"
      >
        <label className="input rounded-full ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input name="search" type="search" placeholder="Search any Models" />
        </label>
        <button className="btn rounded-full bg-linear-to-r from-orange-400 to-orange-500 text-white py-2.5 font-medium hover:from-orange-500 hover:to-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-center">
          Search
        </button>
      </form>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-8  gap-8">
        {models.map((model) => (
          <AllModelsCard key={model._id} model={model} />
        ))}
      </div>
    </div>
  );
};

export default AllModels;
