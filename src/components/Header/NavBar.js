import React from "react";
import logo from "../../assets/images/Tradeflow logo.png";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <NavLink to="/">
        <img
          src={logo}
          alt="Tradeflow logo"
          className="w-[160px] md:w-[200px] h-[55px] object-contain"
        ></img>
      </NavLink>
      <ul className="text-base font-medium text-blue-100 flex md:gap-8">
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>About Us</NavLink>
        </li>
        <li>
          <NavLink>Our Products</NavLink>
        </li>
        <li>
          <NavLink>Clients & Partnerships</NavLink>
        </li>
        <li>
          <NavLink>Blog & Stories</NavLink>
        </li>
      </ul>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search"
          className="w-40 py-4 rounded-lg placeholder:text-center bg-grey-300 bg-search bg-no-repeat bg-[20%_50%] focus:outline-none focus:bg-none"
        />
        <NavLink
          to="/"
          className="bg-blue-100 rounded-lg py-4 w-40 text-center text-white-100 text-base font-lato"
        >
          Join the waitlist
        </NavLink>
      </div>
      <button className="text-blue-100 md:hidden ">
        <GiHamburgerMenu className="text-3xl " />
        <IoCloseSharp className="text-4xl" />
      </button>
    </nav>
  );
};

export default NavBar;
