import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa6';
import css from '../../assets/images/stack/CSS.png';
import express from '../../assets/images/stack/Express.png';
import html from '../../assets/images/stack/HTML.png';
import javasript from '../../assets/images/stack/Javascript.svg';
import mongodb from '../../assets/images/stack/MongoDB.svg';
import nodejs from '../../assets/images/stack/NodeJs.svg';
import react from '../../assets/images/stack/React.png';
import tailwind from '../../assets/images/stack/Tailwind.png';
import './Project.css';

function Project() {
    return (
      <div>
        <h2 className="text-3xl font-bold text-center">Project</h2>
        <div className="project-container">
          <div className="project-card" id="project-01">
            <div className="project-number project-number-right ">01</div>
            <div className="project-content w-1/2">
              <div className="flex">
                <img className="w-10" src={html} alt="" />
                <img className="w-10" src={css} alt="" />
                <img className="w-10" src={javasript} alt="" />
                <img className="w-10" src={tailwind} alt="" />
                <img className="w-10" src={react} alt="" />
                <img className="w-10" src={nodejs} alt="" />
                <img className="w-10" src={express} alt="" />
                <img className="w-10" src={mongodb} alt="" />
              </div>
              <div className="">
                <h1 className="text-4xl font-bold mb-3">Doctor's Portal</h1>
                <p>
                  A "Doctor's Portal" designed specifically for dentists is a
                  web-based platform tailored to the needs of dental
                  professionals and practices.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <a target="_blank" href="" className="btn-design">
                  Read More
                </a>
                <a
                  target="_blank"
                  href="https://github.com/mohammad-al-samiul"
                  rel="noreferrer"
                >
                  <FaGithub className="text-4xl hover:text-red-400" />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/mohammad-al-samiul"
                  rel="noreferrer"
                >
                  <FaLink className="text-4xl hover:text-red-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Project;
