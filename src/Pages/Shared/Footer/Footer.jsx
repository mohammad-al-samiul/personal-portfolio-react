import React from "react";
import {
  FaFacebook, FaGithub, FaLinkedinIn,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="mt-20 w-full flex items-center justify-center bg-[#fff8f3] px-4">
      <div className="md:w-2/3 w-full px-4 text-white flex flex-col justify-center">
        <div className="w-full text-3xl lg:text-6xl font-bold mt-6">
          <h1 className="w-full md:w-2/3 text-gray-600">Get in Touch</h1>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between ">
          <p className="w-full md:w-2/3 text-gray-600 text-justify">
            I'm always open to new opportunities, collaboration, and connecting
            with fellow developers. Feel free to reach out to me via Email or
            connect with me on LinkedIn
          </p>
          <div className="w-44 pt-6 md:pt-0">
            <Link
              to="/contact"
              className="bg-red-400 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center"
            >
              Contact US
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className=" flex mt-4 lg:mt-24  flex-row justify-around lg:justify-between">
            <Link
              to="/"
              className="hidden md:block cursor-pointer font-bold text-gray-600 font-stylish-one uppercase text-xl"
            >
              Al Samiul
            </Link>
            <Link
              to="/about"
              className=" md:block cursor-pointer text-gray-600  uppercase"
            >
              About
            </Link>
            <Link
              to="/skills"
              className=" md:block cursor-pointer text-gray-600  uppercase"
            >
              Skill
            </Link>
            <Link
              to="/project"
              className=" md:block cursor-pointer text-gray-600  uppercase"
            >
              Project
            </Link>
            <Link
              to="/contact"
              className=" md:block cursor-pointer text-gray-600  uppercase"
            >
              Contact
            </Link>
          </div>
          <div className="text-gray-600 flex gap-4 justify-center lg:items-start mt-4 lg:mt-6">
            <a
              target="_blank"
              href="https://www.facebook.com/alsamiul11"
              rel="noreferrer"
            >
              <FaFacebook className="text-3xl hover:text-red-400 " />
            </a>

            <a
              target="_blank"
              href="https://github.com/mohammad-al-samiul"
              rel="noreferrer"
            >
              <FaGithub className="text-3xl hover:text-red-400 transition-all duration-600" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/al-samiul/"
              rel="noreferrer"
            >
              <FaLinkedinIn className="text-3xl hover:text-red-400 transition-all duration-600" />
            </a>
          </div>
          <hr className="border-gray-600 mt-7" />
          <p className="w-full text-center my-12 text-gray-600">
            Copyright © 2023 Al Samiul Creative
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
