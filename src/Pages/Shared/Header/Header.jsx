import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css';

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

   const navLinkStyles = ({ isActive }) => {
    console.log(isActive);
     return {
       backgroundColor: isActive ? "white" : "",
       color: isActive ? "black" : "",
     };
   };
  return (
    <nav className=" border-gray-200  bg-[#fff8f3]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <span className="text-4xl font-bold text-gray-600 font-stylish-one uppercase">
            Al Samiul
          </span>
        </Link>
        <button
          onClick={handleClick}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-100 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${open ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-[#e8b772] lg:bg-[#fff8f3] uppercase">
            <li onClick={handleClick} style={{ navLinkStyles }}>
              <NavLink
                to="/home"
                className="nav-link block py-2 pl-3 pr-4 text-white lg:text-gray-600 rounded"
              >
                Home
              </NavLink>
            </li>

            <li onClick={handleClick}>
              <NavLink
                to="/skills"
                className="nav-link block py-2 pl-3 pr-4 text-white lg:text-gray-600 rounded"
              >
                Skills
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink
                to="/project"
                className="nav-link block py-2 pl-3 pr-4 text-white lg:text-gray-600 rounded"
              >
                Project
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink
                to="/contact"
                className="nav-link block py-2 pl-3 pr-4 text-white lg:text-gray-600 rounded"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
