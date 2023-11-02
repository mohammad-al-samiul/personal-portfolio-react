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
            <a target="_blank" href="">
              <FaFacebook className="text-3xl hover:text-red-400 " />
            </a>

            <a target="_blank" href="">
              <FaGithub className="text-3xl hover:text-red-400" />
            </a>
            <a target="_blank" href="">
              <FaLinkedinIn className="text-3xl hover:text-red-400" />
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

// <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
//   <nav className="grid grid-flow-col gap-4">
//     <a className="link link-hover">About us</a>
//     <a className="link link-hover">Contact</a>
//     <a className="link link-hover">Jobs</a>
//     <a className="link link-hover">Press kit</a>
//   </nav>
//   <nav>
//     <div className="grid grid-flow-col gap-4">
//       <a>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           className="fill-current"
//         >
//           <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
//         </svg>
//       </a>
//       <a>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           className="fill-current"
//         >
//           <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//         </svg>
//       </a>
//       <a>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           className="fill-current"
//         >
//           <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//         </svg>
//       </a>
//     </div>
//   </nav>
//   <aside>
//     <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
//   </aside>
// </footer>;
