import React from "react";
import { FaGithub, FaLink } from "react-icons/fa6";
import css from "../../assets/images/stack/CSS.png";
import express from "../../assets/images/stack/Express.png";
import html from "../../assets/images/stack/HTML.png";
import javasript from "../../assets/images/stack/Javascript.svg";
import mongodb from "../../assets/images/stack/MongoDB.svg";
import nodejs from "../../assets/images/stack/NodeJs.svg";
import react from "../../assets/images/stack/React.png";
import tailwind from "../../assets/images/stack/Tailwind.png";
import "./Project.css";

function Project() {
  return (
    <div className="mt-8 lg:mt-20">
      <h2 className="text-3xl lg:text-5xl font-bold text-center text-red-400 ">
        Project
      </h2>
      <div className="project-container mt-8 lg:mt-20">
        <div className="project-card" id="project-01">
          <div className="project-number project-number-right ">01</div>
          <div className="project-content project-content-left lg:w-1/2">
            <div className="hidden lg:flex">
              <img className="w-10" src={html} alt="" />
              <img className="w-10" src={css} alt="" />
              <img className="w-10" src={javasript} alt="" />
              <img className="w-10" src={tailwind} alt="" />
              <img className="w-10" src={react} alt="" />
              <img className="w-10" src={nodejs} alt="" />
              <img className="w-10" src={express} alt="" />
              <img className="w-10" src={mongodb} alt="" />
            </div>
            <div>
              <h1 className="text-lg lg:text-4xl font-bold text-center lg:text-start lg:mb-3">
                Regal Dragon Restuarant
              </h1>
              <p className="hidden lg:block">
                Regal Dragon website is an online food delivery and ordering
                platform designed to connect users with a wide range of
                restaurants, allowing them to order food for delivery or pickup
              </p>
            </div>
            <div className="flex justify-center lg:justify-start lg:items-center gap-4">
              <a target="_blank" href="" className="btn-design hidden lg:block">
                Read More
              </a>
              <a
                target="_blank"
                href="https://github.com/mohammad-al-samiul/Regal-Dragon-Restaurant-Client"
                rel="noreferrer"
              >
                <FaGithub className="text-4xl hover:text-red-400 transition-all duration-600" />
              </a>
              <a
                target="_blank"
                href="https://regal-dragon-restaurant.netlify.app/"
                rel="noreferrer"
              >
                <FaLink className="text-4xl hover:text-red-400 transition-all duration-600" />
              </a>
            </div>
          </div>
        </div>
        <div className="project-card" id="project-02">
          <div className="project-number project-number-left ">02</div>
          <div className="project-content project-content-right lg:w-1/2">
            <div className="hidden lg:flex">
              <img className="w-10" src={html} alt="" />
              <img className="w-10" src={css} alt="" />
              <img className="w-10" src={javasript} alt="" />
              <img className="w-10" src={tailwind} alt="" />
              <img className="w-10" src={react} alt="" />
              <img className="w-10" src={nodejs} alt="" />
              <img className="w-10" src={express} alt="" />
              <img className="w-10" src={mongodb} alt="" />
            </div>
            <div>
              <h1 className="text-lg text-center lg:text-start lg:text-4xl font-bold lg:mb-3">
                Doctor's Portal
              </h1>
              <p className="hidden lg:block">
                Doctor's Portal website designed specifically for dentists is a
                web-based platform tailored to the needs of dental professionals
                and practices.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start lg:items-center gap-4">
              <a target="_blank" href="" className="btn-design hidden lg:block">
                Read More
              </a>
              <a
                target="_blank"
                href="https://github.com/mohammad-al-samiul/doctor-portal-client"
                rel="noreferrer"
              >
                <FaGithub className="text-4xl hover:text-red-400 transition-all duration-600" />
              </a>
              <a
                target="_blank"
                href="https://doctors-porta1.netlify.app/"
                rel="noreferrer"
              >
                <FaLink className="text-4xl hover:text-red-400 transition-all duration-600" />
              </a>
            </div>
          </div>
        </div>
        <div className="project-card " id="project-03">
          <div className="project-number project-number-right ">03</div>
          <div className="project-content project-content-left text-center lg:text-start lg:w-1/2">
            <div className="hidden lg:flex">
              <img className="w-10" src={html} alt="" />
              <img className="w-10" src={css} alt="" />
              <img className="w-10" src={javasript} alt="" />
              <img className="w-10" src={tailwind} alt="" />
              <img className="w-10" src={react} alt="" />
              <img className="w-10" src={nodejs} alt="" />
              <img className="w-10" src={express} alt="" />
              <img className="w-10" src={mongodb} alt="" />
            </div>
            <div>
              <h1 className="text-lg lg:text-4xl font-bold lg:mb-3">
                Genius Car
              </h1>
              <p className="hidden lg:block">
                At our website, users have the flexibility to explore a diverse
                range of services tailored to their vehicle's needs. Whether
                it's routine maintenance, repairs, or upgrades, our
                comprehensive selection ensures that every customer finds
                exactly what they're looking for.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start items-center gap-4">
              <a target="_blank" href="" className="btn-design hidden lg:block">
                Read More
              </a>
              <a
                target="_blank"
                href="https://github.com/mohammad-al-samiul/genius-car-client"
                rel="noreferrer"
              >
                <FaGithub className="text-4xl hover:text-red-400 transition-all duration-600" />
              </a>
              <a
                target="_blank"
                href="https://genius-car-react.netlify.app/"
                rel="noreferrer"
              >
                <FaLink className="text-4xl hover:text-red-400 transition-all duration-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
