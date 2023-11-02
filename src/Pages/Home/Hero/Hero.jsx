import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import myImage from '../../../assets/images/hardy.png';
import './Hero.css';

function Hero() {
  const [textColor, setTextColor] = useState("purple");
  return (
    <div className="hero place-items-end lg:max-h-screen ">
      <div
        className="hero-content  flex-col-reverse lg:flex-row-reverse m-0 p-0"

      >
        <div>
          <img src={myImage} className="rounded-lg" />
        </div>

        <div className="lg:w-1/2 pt-5 px-8 lg:px-24 ">
          <h2 className="text-3xl font-bold">Hi! Al Samiul</h2>
          <span className="text-4xl">I am a</span>
          <span
            style={{
              fontSize: "36px",
              color: textColor,
            }}
          >
            <TypeAnimation
              sequence={[
                " Coder",
                1000,
                () => setTextColor("darksalmon"),

                " Software Developer",
                1000,
                () => setTextColor("deeppink"),
                " Full Stack Developer",
                1000,
                () => setTextColor("darkviolet"),
                " Frontend Developer",
                1000,
                () => setTextColor("dodgerblue"),
              ]}
              speed={50}
              style={{ fontSize: "36px" }}
              repeat={Infinity}
            />
          </span>
          <p className="py-6">
            I am a Software Developer and here is my portfolio website. Here
            you'll learn about my journey as a software developer.
          </p>
          <a href="" className="btn-design">Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
