import React from "react";
import Mail from "./mail.svg";
import Instagram from "./instagram.svg";
import Linkedin from "./linkedin.svg";
import Twitter from "./twitter.svg";
import Youtube from "./youtube.svg";

function Contact() {
  return (
    <div className="bg-primaryBackground">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col space-y-6 w-full max-w-6xl p-8 rounded-xl shadow-[0_0_40px_0] shadow-[#0004] md:flex-row md:space-x-6 md:space-y-0 justify-between sm:p-12">
          <div className="flex flex-col justify-between mx-10 ">
            <div className="text-white">
              <h1 className="font-bold text-3xl tracking-wide">Contact Us</h1>
              <p className="pt-2 text-amber-500">
                For general enquiry, event or press, please drop us a message
              </p>
            </div>

            <div className="flex space-x-4 my-10">
              <a href="#">
                <img src={Mail} width="25" alt="" />{" "}
              </a>
              <a href="#">
                <img src={Instagram} width="25" alt="" />
              </a>
              <a href="#">
                <img src={Twitter} width="25" alt="" />
              </a>
              <a href="#">
                <img src={Youtube} width="25" alt="" />
              </a>
              <a href="#">
                <img src={Linkedin} width="25" alt="" />
              </a>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 w-full md:w-80">
              <form action="" className="flex flex-col space-y-4 w-full">
                <div>
                  <label htmlFor="name" className="text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="ring-1 ring-stone-900 w-full rounded-md px-4 py-2 outline-none mt-2"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email "
                    className="ring-1 ring-stone-900 w-full rounded-md px-4 py-2 outline-none mt-2"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm">
                    Message
                  </label>
                  <textarea
                    type="text"
                    placeholder="message"
                    rows="4"
                    className="ring-1 ring-stone-900 w-full rounded-md px-4 py-2 outline-none mt-2 resize-none"
                  />
                </div>

                <button
                  className="inline-block self-end bg-primaryBackground
               text-white rounded-lg font-bold  py-4 px-6 uppercase text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
