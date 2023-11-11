import React from "react";

function About() {
  return (
    <div className="w-[90%] lg:w-[85%] mx-auto bg-[#fff8f3] text-gray-600 flex justify-center mt-10 lg:mt-20 ">
      <div className="p-8 lg:p-10 lg:w-2/3">
        <div className="lg:text-center text-justify">
          <h1 className="text-3xl lg:text-5xl font-bold text-center text-red-400">
            About Me
          </h1>
          <p className="my-7 px-5">
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
        <div className="lg:flex justify-between mt-10 px-5  ">
          <div className="flex lg:grid ">
            <p>Name:</p>
            <h3 className="font-bold">Al Samiul</h3>
          </div>
          <div className="flex lg:grid">
            <p>Email:</p>
            <h3 className="font-bold ">samiulwebprogrammer@gmail.com</h3>
          </div>
          <div className="flex lg:grid lg:w-[120px]">
            <p>Date of Birth:</p>
            <h3 className="font-bold">30 january 2002</h3>
          </div>
          <div className="flex lg:grid lg:w-[100px]">
            <p>From:</p>
            <h3 className="font-bold">Chittagong, Bangladesh</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
