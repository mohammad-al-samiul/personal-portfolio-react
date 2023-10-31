import React from "react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h2 className="text-3xl font-bold">Hi! Al Samiul</h2>
          <div>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "I am a Coder",
                1000,
                "I am a Software Developer",
                1000,
                "I am a Full Stack Developer",
                1000,
                "I am a Frontend Developer",
                1000,
              ]}
              speed={50}
              style={{ fontSize: "50px" }}
              repeat={Infinity}
            />
          </div>
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
