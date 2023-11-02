import React from "react";

function About() {
  return (
    <div className="mx-32 bg-[#fff8f3]">
      <div className="p-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold">About Me</h1>
          <p className="my-3">
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
        <div className="flex justify-between mt-10 ">
          <div>
            <p>Name:</p>
            <h3 className="font-bold">Al Samiul</h3>
          </div>
          <div className="">
            <p>Email:</p>
            <h3 className="font-bold ">
              samiulwebprogrammer@gmail.com
            </h3>
          </div>
          <div>
            <p>Date of Birth:</p>
            <h3 className="font-bold">30 january 2002</h3>
          </div>
          <div>
            <p>From:</p>
            <h3 className="font-bold">Chittagong, Bangladesh</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
