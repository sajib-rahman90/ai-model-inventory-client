import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useNavigation } from "react-router";
import Loading from "../Components/Loading";

const MainLayout = () => {
  const { state } = useNavigation();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        {state == "loading" ? <Loading /> : <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
