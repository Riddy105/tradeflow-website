import React from "react";
import logo from "../../assets/images/Tradeflow logo.png";
import whiteLogo from "../../assets/images/Tradeflow-logo-white.png";
import { NavLink, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Button from "../Button/Button";

const NavBar = ({ showNav, toggleNav, closeNav }) => {
  // const [showNav, setShowNav] = useState(false);
  // const navClickHandler = () => {
  //   setShowNav((prev) => !prev);
  // };
  return (
    <div className="shadow-custom1 relative">
      <nav className="flex justify-between items-center py-4 w-11/12 mx-auto ">
        <Link to="/" className="shrink-0">
          <img
            src={logo}
            alt="Tradeflow logo"
            className="w-[160px] h-[50px] object-contain"
          ></img>
        </Link>
        <ul
          className={`nav-link-classes ${
            showNav ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={closeNav}
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <HashLink to="/#about-us" smooth>
              About Us
            </HashLink>
          </li>
          <li>
            <HashLink to="/#products" smooth>
              Our products
            </HashLink>
          </li>
          <li>
            <NavLink>Clients & Partnerships</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog & Stories</NavLink>
          </li>

          <li className="mt-auto mobileNav:hidden">
            <img
              src={whiteLogo}
              className="w-[150px] h-[60px] object-contain"
              alt="Tradeflow logo"
            ></img>
          </li>
        </ul>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="text-sm hidden mobileNav:block w-28 xl:w-40 py-4 rounded-lg placeholder:text-center bg-grey-300 bg-search bg-no-repeat bg-[20%_50%] focus:outline-none focus:bg-none"
          />
          <NavLink to="/form">
            <Button paddingY="py-4" width="w-28 xl:w-40">
              Join the waitlist
            </Button>
          </NavLink>
          <button
            className="text-blue-100 mobileNav:hidden z-10 "
            onClick={toggleNav}
          >
            {!showNav && <GiHamburgerMenu className="text-3xl " />}
            {showNav && <IoCloseSharp className="text-4xl text-white-100" />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
