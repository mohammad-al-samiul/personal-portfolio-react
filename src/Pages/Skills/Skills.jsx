import React from 'react';
import bootstrap from '../../assets/images/stack/Bootstrap.svg';
import css from '../../assets/images/stack/CSS.png';
import express from '../../assets/images/stack/Express.png';
import git from '../../assets/images/stack/Git.svg';
import github from '../../assets/images/stack/Github.svg';
import html from '../../assets/images/stack/HTML.png';
import javascript from '../../assets/images/stack/Javascript.svg';
import materialUi from '../../assets/images/stack/MaterialUI.svg';
import mongodb from '../../assets/images/stack/MongoDB.svg';
import next from '../../assets/images/stack/Next.svg';
import node from '../../assets/images/stack/NodeJs.svg';
import react from '../../assets/images/stack/React.png';
import redux from '../../assets/images/stack/Redux.svg';
import tailwind from '../../assets/images/stack/Tailwind.png';
import vercel from '../../assets/images/stack/Vercel.svg';
import blob from '../../assets/images/userAsset/blob vector.png';
import './Skills.css';

function Skills() {
    return (
      <div className="lg:flex lg:px-20 lg:py-20 mt-20">
        <div className="lg:w-1/2 px-10">
          <h1 className="text-3xl text-red-400">Me and My Tech Stack</h1>
          <p className="mt-4 text-justify">

            I am a passionate and experienced MERN stack web developer with a
            strong love for creating robust and interactive web applications. My
            journey in the world of web development started 1.5 years ago, and I
            have been on an exciting coding adventure ever since.I'm driven by
            the desire to solve real-world problems with technology. The web is
            a powerful platform for innovation and communication, and I'm
            dedicated to making it a better place for users and businesses
            alike.
          </p>
        </div>
        <div className="lg:w-1/2 relative mt-20 px-10 lg:mt-0 lg:px-0">
          <div className="grid grid-cols-5 gap-6 lg:px-10 relative">
            <img className="blob-style" src={blob} alt="" />
            <img className="skill-logo" src={html} alt="" />
            <img className="skill-logo" src={css} alt="" />
            <img className="skill-logo" src={javascript} alt="" />
            <img className="skill-logo" src={react} alt="" />
            <img className="skill-logo" src={node} alt="" />
            <img className="skill-logo" src={next} alt="" />
            <img className="skill-logo" src={redux} alt="" />
            <img className="skill-logo" src={tailwind} alt="" />
            <img className="skill-logo" src={bootstrap} alt="" />
            <img className="skill-logo" src={materialUi} alt="" />
            <img className="skill-logo" src={express} alt="" />
            <img className="skill-logo" src={git} alt="" />
            <img className="skill-logo" src={github} alt="" />
            <img className="skill-logo" src={mongodb} alt="" />
            <img className="skill-logo" src={vercel} alt="" />
          </div>
        </div>
      </div>
    );
}

export default Skills;
