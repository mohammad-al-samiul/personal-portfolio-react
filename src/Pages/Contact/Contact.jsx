/* eslint-disable no-unused-vars */
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import toast from "react-hot-toast";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rf0t8tt",
        "template_tqfxo2a",
        form.current,
        "PmFGs7THjokSk6B8n",
      )
      .then(
        (result) => {
          toast.success(`Message Sent Successfully`);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <div className="w-[80%] mx-auto lg:flex lg:mt-20 bg-[#fff8f3] p-6 lg:p-16 items-center text-gray-600">
      <div className="lg:w-1/2 lg:px-4">
        <div>
          <h2 className="text-3xl font-bold">Let's Connect</h2>
          <p className="mt-6 text-justify">
            Feel free to reach out to me through the contact information
            provided on this website or connect with me on social media
            platforms. I believe that great ideas and innovations often emerge
            from the connections we make, so let's start a conversation and see
            where it leads.
          </p>
          <div />
        </div>
      </div>
      <div className="lg:w-1/2 lg:px-4 lg:pl-40">
        <h2 className="text-3xl font-bold mb-6 mt-10 lg:mt-0">
          Let's Message me
        </h2>
        <form ref={form} onSubmit={sendEmail} action="">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input w-full max-w-xs mb-3 "
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input  w-full max-w-xs mb-3 "
            />
          </div>
          <div>
            <textarea
              className="textarea w-full max-w-xs mb-3"
              name="message"
              placeholder="Message"
            />
          </div>
          <div className="mt-3">
            <button
              type="submit"
              className="w-full max-w-xs bg-red-400 text-white px-2 py-2 rounded-md focus:bg-red-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
