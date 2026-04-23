import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllModels from "../Pages/AllModels/AllModels";
import AddModel from "../Pages/AddModel/AddModel";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ModelDetails from "../Pages/ModelDetails/ModelDetails";
import UpdateModel from "../Pages/UpdateModel/UpdateModel";
import MyModels from "../Pages/MyModels/MyModels";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/models",
        element: <AllModels />,
        loader: () => fetch("http://localhost:3000/models"),
      },
      {
        path: "/add-model",
        element: (
          <PrivateRoute>
            <AddModel />
          </PrivateRoute>
        ),
      },
      {
        path: "/models/:id",
        element: <ModelDetails />,
      },
      {
        path: "/update-model/:id",
        element: <UpdateModel />,
      },
      {
        path: "/my-models",
        element: <MyModels />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
