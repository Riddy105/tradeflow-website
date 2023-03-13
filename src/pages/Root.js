import React from "react";
import NavBar from "../components/Header/NavBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <header className="container-custom">
        <NavBar />
      </header>
      <Outlet />
    </>
  );
};

export default RootLayout;
