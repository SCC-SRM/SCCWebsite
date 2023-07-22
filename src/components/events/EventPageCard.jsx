import React from "react";

export default function EventPageCard({ Month, Date, Event }) {
  return (
    <div>
      <div className="relative p-4 top-5  min-h-screen">
        <span
          className="font-helvetica font-bold text-custommonth absolute text-7xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-11xl 2xl:text-12xl "
          style={{ textShadow: "2px 2px 2px grey" }}
        >
          {Month}
        </span>

        <span
          className="font-helvetica font-bold text-white absolute top-20 left-12 translate-x-1/2 text-7xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-11xl 2xl:text-12xl "
          style={{ textShadow: "2px 2px 2px grey" }}
        >
          {Date}
        </span>

        <div className="flex justify-center items-center">
          <div className="relative top-60   gap-y-5 grid grid-cols-2 gap-x-20 max-w-full sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl">
            {Event.map((element) => (
              <span
                className="font-helvetica inline-block w-auto justify-self-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                style={{ maxWidth: "fit-content" }}
              >
                <p className="font-helvetica font-bold text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl text-custommonth">
                  {element.date}
                  <br />
                </p>
                <p className="font-helvetica font-bold text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl text-white">
                  {element.time}
                  <br />
                </p>
                <p className="font-helvetica font-bold text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl text-white">
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
