import React from "react";
import "./index.css";
function Events() {
  return (
    <>
      <div className="header absolute top-0 right-2 flex items-center">
        <h1 className="text-4xl font-bold mr-auto text-custom1">
          Upcoming Events
        </h1>
      </div>
      <div className="absolute top-8 right-0 w-1/4 h-10 border-b-4 z-10 border-custommonth"></div>
      <div className="relative p-4 top-20">
        <span
          className="font-helvetica font-bold text-9xl text-custommonth md:text-11xl lg:text-14xl xl:text-16xl 2xl:text-20xl relative"
          style={{ textShadow: "2px 2px 2px grey", fontSize: "10rem" }}
        >
          Jan
        </span>
        <span
          className="font-helvetica font-bold text-9xl text-custom1 md:text-11xl lg:text-14xl xl:text-16xl 2xl:text-20xl absolute top-20 left-12 translate-x-1/2"
          style={{ textShadow: "2px 2px 2px grey", fontSize: "10rem" }}
        >
          23'
        </span>
      </div>

      <div className="marg absolute top-80 gap-y-10 grid grid-cols-2  gap-20 pr-50">
        <span className="font-helvetica">
          <p className="font-helvetica font-bold text-4xl text-custommonth ">
            15th JANUARY <br />
          </p>
          <p className="font-helvetica font-bold text-xl text-custom1">
            4:00PM IST <br />
          </p>
          <p className="font-helvetica font-bold text-xl text-custom1 ">
            HACKATHON <br />
          </p>
        </span>
        <span className="font-helvetica">
          <p className="font-helvetica font-bold text-4xl text-custommonth ">
            23rd JANUARY <br />
          </p>
          <p className="font-helvetica font-bold text-xl text-custom1">
            4:00PM IST <br />
          </p>
          <p className="font-helvetica font-bold text-xl text-custom1 ">
            HACKATHON <br />
          </p>
        </span>
        <span className="font-helvetica">
          <p className="font-helvetica font-bold text-4xl text-custommonth ">
            19th JANUARY <br />
          </p>
          <p className="font-helvetica font-bold text-xl text-custom1">
            4:00PM IST <br />
          </p>
          <p className="font-helvetica font-bold text-xl text-custom1 ">
            HACKATHON <br />
          </p>
        </span>
        <span className="font-helvetica">
          <p className="font-helvetica font-bold text-4xl text-custommonth ">
            27th JANUARY <br />
          </p>
          <p className="font-helvetica font-bold text-xl text-custom1">
            4:00PM IST <br />
          </p>
          <p className="font-helvetica font-bold text-xl text-custom1 ">
            HACKATHON <br />
          </p>
        </span>
        <span className="font-helvetica">
          <p className="font-helvetica font-bold text-4xl text-custommonth ">
            21st JANUARY <br />
          </p>
          <p className="font-helvetica font-bold text-xl text-custom1">
            10:00AM IST <br />
          </p>
          <p className="font-helvetica font-bold text-xl text-custom1 ">
            HACKATHON <br />
          </p>
        </span>
        <span className="font-helvetica">
          <p className="font-helvetica font-bold text-4xl text-custommonth ">
            31st JANUARY <br />
          </p>
          <p className="font-helvetica font-bold text-xl text-custom1">
            10:00AM IST <br />
          </p>
          <p className="font-helvetica font-bold text-xl text-custom1 ">
            HACKATHON <br />
          </p>
        </span>
      </div>
    </>
  );
}

export default Events;
