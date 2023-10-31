import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import myImage from '../../../assets/my-bg2.jpg';

function Hero() {
  const [textColor, setTextColor] = useState("purple");
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={myImage} className="w-1/2 rounded-lg" />
        <div className="w-1/2">
          <h2 className="text-3xl font-bold">Hi! Al Samiul</h2>
          <span className="text-5xl">I am a</span>
          <span
            style={{
              fontSize: "48px",
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
              style={{ fontSize: "48px" }}
              repeat={Infinity}
            />
          </span>
          <p className="py-6">
            I am a Software Developer and here is my portfolio website. Here
            you'll learn about my journey as a software developer.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
