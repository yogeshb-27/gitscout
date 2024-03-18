import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-100">
      <div className="container mx-auto px-12">
        <div className="flex justify-between lg:justify-start items-center py-3 ">
          <NavLink
            className="text-xl focus:outline-red-500 outline-offset-4"
            to="/"
          >
            <i className="bx bxl-git text-xl text-red-500 mr-2"></i>
            <span className="text-xl">GitScout</span>
          </NavLink>

          <button
            className="block lg:hidden text-black focus:outline-none"
            onClick={toggleNavbar}
          >
            &#9776;
          </button>

          <div className="hidden lg:flex lg:items-center lg:w-auto lg:ms-48 ">
            <div className="lg:flex lg:flex-start lg:space-x-4 gap-14">
              <NavLink
                className="block px-2  hover:text-red-500 focus:outline-red-500 "
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="block px-2  hover:text-red-500 focus:outline-red-500"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className="block px-2  hover:text-red-500 focus:outline-red-500 "
                to="/search"
              >
                Search
              </NavLink>
            </div>
          </div>
        </div>
        <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col items-start">
            <NavLink
              className="block py-2 text-black hover:text-red-500"
              to="/"
              onClick={toggleNavbar}
            >
              Home
            </NavLink>
            <NavLink
              className="block py-2 text-black hover:text-red-500"
              to="/about"
              onClick={toggleNavbar}
            >
              About
            </NavLink>
            <NavLink
              className="block py-2 text-black hover:text-red-500"
              to="/search"
              onClick={toggleNavbar}
            >
              Search
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
