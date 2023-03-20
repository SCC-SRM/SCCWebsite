import React from "react";

function Events() {
  return (
    <div className="min-h-screen">
      <div className="flex p-0">
        <span className="font-bold text-4xl text-underline-offset: 8px underline decoration-[#F18C00] text-white ml-auto ">
          Upcoming Events
        </span>
      </div>

      <div className="relative p-4 top-5">
        <span
          className="font-helvetica font-bold  text-custommonth absolute"
          style={{ textShadow: "2px 2px 2px grey", fontSize: "10rem" }}>
          JAN
        </span>
        <span
          className="font-helvetica font-bold  text-white  absolute top-20 left-12 translate-x-1/2"
          style={{ textShadow: "2px 2px 2px grey", fontSize: "10rem" }}>
          23'
        </span>
      </div>
      <div className="flex justify-center items-center">
        <div
          className="relative top-80 gap-y-10 grid grid-cols-2 gap-x-20 "
          style={{ maxWidth: "fit-content" }}>
          <span
            className="font-helvetica inline-block w-auto justify-self-center"
            style={{ maxWidth: "fit-content" }}>
            <p className="font-helvetica font-bold text-3xl text-custommonth">
              15th JANUARY <br />
            </p>
            <p className="font-helvetica font-bold text-xl text-white">
              4:00PM IST <br />
            </p>
            <p className="font-helvetica font-bold text-xl text-white">
              HACKATHON <br />
            </p>
          </span>
          <span
            className="font-helvetica inline-block w-auto"
            style={{ maxWidth: "fit-content" }}>
            <p className="font-helvetica font-bold text-3xl text-custommonth">
              23rd JANUARY <br />
            </p>
            <p className="font-helvetica font-bold text-xl text-white">
              4:00PM IST <br />
            </p>
            <p className="font-helvetica font-bold text-xl text-white">
              HACKATHON <br />
            </p>
          </span>
          <span
            className="font-helvetica inline-block w-auto justify-self-center"
            style={{ maxWidth: "fit-content" }}>
            <p className="font-helvetica font-bold text-3xl text-custommonth">
              15th JANUARY <br />
            </p>
            <p className="font-helvetica font-bold text-xl text-white">
              4:00PM IST <br />
            </p>
            <p className="font-helvetica font-bold text-xl text-white">
              HACKATHON <br />
            </p>
          </span>
          <span
            className="font-helvetica inline-block w-auto"
            style={{ maxWidth: "fit-content" }}>
            <p className="font-helvetica font-bold text-3xl text-custommonth">
              23rd JANUARY <br />
            </p>
            <p className="font-helvetica font-bold text-xl text-white">
              4:00PM IST <br />
            </p>
            <p className="font-helvetica font-bold text-xl text-white">
              HACKATHON <br />
            </p>
          </span>
          <span
            className="font-helvetica inline-block w-auto justify-self-center"
            style={{ maxWidth: "fit-content" }}>
            <p className="font-helvetica font-bold text-3xl text-custommonth">
              15th JANUARY <br />
            </p>
            <p className="font-helvetica font-bold text-xl text-white">
              4:00PM IST <br />
            </p>
            <p className="font-helvetica font-bold text-xl text-white">
              HACKATHON <br />
            </p>
          </span>
          <span
            className="font-helvetica inline-block w-auto"
            style={{ maxWidth: "fit-content" }}>
            <p className="font-helvetica font-bold text-3xl text-custommonth">
              23rd JANUARY <br />
            </p>
            <p className="font-helvetica font-bold text-xl text-white">
              4:00PM IST <br />
            </p>
            <p className="font-helvetica font-bold text-xl text-white">
              HACKATHON <br />
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Events;
