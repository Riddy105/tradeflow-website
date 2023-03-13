import React from "react";
import NavBar from "../components/Header/NavBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet />
    </>
  );
};

export default RootLayout;
