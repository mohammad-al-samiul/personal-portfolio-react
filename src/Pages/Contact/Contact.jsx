import React from 'react';

function Contact() {
    return (
      <div className="lg:flex lg:mt-10 bg-[#fff8f3] p-6 lg:p-16">
        <div className="lg:w-1/2 lg:px-4">
          <div>
            <h2 className="text-3xl font-bold">Let's Connect</h2>
            <p className="mt-6 text-justify">
              Feel free to reach out to me through the contact information
              provided on this website or connect with me on social media
              platforms. I believe that great ideas and innovations often emerge
              from the connections we make, so let's start a conversation and
              see where it leads.
            </p>
            <div />
          </div>
        </div>
        <div className="lg:w-1/2 lg:px-4 lg:ml-20 ">
          <h2 className="text-3xl font-bold mb-6 mt-10 lg:mt-0">
            Let's Message me
          </h2>
          <form action="">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="input w-full max-w-xs mb-3 "
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="input  w-full max-w-xs mb-3 "
              />
            </div>
            <div>
              <textarea
                className="textarea w-full max-w-xs mb-3"
                placeholder="Message"
              />
            </div>
            <div>
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
