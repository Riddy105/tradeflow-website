import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  const [showNav, setShowNav] = useState(false);
  const navClickHandler = () => {
    setShowNav((prev) => !prev);
  };
  return (
    <div className={`${showNav ? "fixed" : ""}`}>
      <header>
        <NavBar showNav={showNav} toggleNav={navClickHandler} />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
