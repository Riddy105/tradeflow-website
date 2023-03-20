import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  const [showNav, setShowNav] = useState(false);
  const navClickHandler = () => {
    setShowNav((prev) => !prev);
  };
  const closeNav = () => {
    setShowNav(false);
  };
  return (
    <div className={`${showNav ? "fixed" : ""}`}>
      <header className="fixed top-0 w-full bg-white-200 z-10">
        <NavBar
          showNav={showNav}
          toggleNav={navClickHandler}
          closeNav={closeNav}
        />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
