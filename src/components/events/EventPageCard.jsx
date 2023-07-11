import React from "react";

export default function EventPageCard({ Month, Date, Event }) {
  return (
    <div>
      <div className="relative p-4 top-5 min-h-screen">
        <span
          className="font-helvetica font-bold  text-custommonth absolute"
          style={{ textShadow: "2px 2px 2px grey", fontSize: "10rem" }}
        >
          {Month}
        </span>
        <span
          className="font-helvetica font-bold  text-white  absolute top-20 left-12 translate-x-1/2"
          style={{ textShadow: "2px 2px 2px grey", fontSize: "10rem" }}
        >
          {Date}
        </span>
        <div className="flex justify-center items-center">
          <div
            className="relative top-80 gap-y-10 grid grid-cols-2 gap-x-20 "
            style={{ maxWidth: "fit-content" }}
          >
            {Event.map((element) => (
              <span
                className="font-helvetica inline-block w-auto justify-self-center"
                style={{ maxWidth: "fit-content" }}
              >
                <p className="font-helvetica font-bold text-3xl text-custommonth">
                  {element.date}
                  <br />
                </p>
                <p className="font-helvetica font-bold text-xl text-white">
                  {element.time}
                  <br />
                </p>
                <p className="font-helvetica font-bold text-xl text-white">
                  {element.event}
                  <br />
                </p>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
