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
    <nav className=" border-gray-200 dark:bg-gray-900 bg-[#fff8f3]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <span className="text-2xl font-bold text-red-500">
            <span className="text-4xl font-lilita-one text-red-500">A</span>
            l
            Samiul
          </span>
        </Link>
        <button
          onClick={handleClick}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-500 dark:focus:ring-gray-600"
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
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#fff8f3] md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#fff8f3] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li onClick={handleClick} style={{ navLinkStyles }}>
              <NavLink
                to="/home"
                className="nav-link block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Home
              </NavLink>
            </li>

            <li onClick={handleClick}>
              <NavLink
                to="/skills"
                className="nav-link block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Skills
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink
                to="/project"
                className="nav-link block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Project
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink
                to="/contact"
                className="nav-link block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent"
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
