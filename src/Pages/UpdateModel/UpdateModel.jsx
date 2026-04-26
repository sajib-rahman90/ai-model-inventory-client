import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateModel = () => {
  const data = useLoaderData();
  const model = data.result;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      framework: e.target.framework.value,
      useCase: e.target.useCase.value,
      dataset: e.target.dataset.value,
      description: e.target.description.value,
      image: e.target.image.value,
    };

    fetch(`http://localhost:3000/models/${model._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Updated!");
        navigate(`/models/${model._id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
          Update AI Model
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Model Name
              </label>
              <input
                type="text"
                defaultValue={model.name}
                name="name"
                placeholder="Model Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Framework
              </label>
              <input
                type="text"
                defaultValue={model.framework}
                name="framework"
                placeholder="(e.g. TensorFlow, PyTorch)"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Use Case
              </label>
              <input
                type="text"
                defaultValue={model.useCase}
                name="useCase"
                placeholder="(e.g. NLP, Computer Vision)"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Dataset
              </label>
              <input
                type="text"
                defaultValue={model.dataset}
                name="dataset"
                placeholder="Dataset Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Description
            </label>
            <textarea
              name="description"
              defaultValue={model.description}
              rows="4"
              placeholder="Short Description"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Image URL
            </label>
            <input
              type="url"
              defaultValue={model.image}
              name="image"
              placeholder="Image URL"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-linear-to-r from-orange-400 to-orange-500 text-white font-medium hover:opacity-90 transition duration-300"
          >
            Update Model
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateModel;
