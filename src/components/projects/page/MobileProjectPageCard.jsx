import Button from "../../../assets/button/Button";
import React, { useEffect, useState } from "react";

export default function MobileProjectPageCard(props) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const descriptionToShow = showFullDescription
    ? props.description
    : props.description.slice(0, 200) + " ...";
  return (
    <div className="flex flex-col items-center md:flex-row md:gap-2 w-[200px] md:w-full md:py-16 md:pb-28">
      <div className="rounded-lg md:px-16  m-2 md:w-1/2">
        <img src={props.image} className="rounded-lg object-fill"></img>
      </div>
      <div className="content w-[40vh] md:w-1/2 px-16">
        <h1 className="capitalize text-center text-xl sm:text-3xl md:text-5xl">
          {props.title}
        </h1>
        <p className="md:pt-12 pt-9 text-left">
          {" "}
          {descriptionToShow}
          {props.description.length > 200 && (
            <span
              className="text-[#ef4444] cursor-pointer"
              onClick={toggleDescription}
            >
              {" "}
              {showFullDescription ? "Read Less" : "Read More"}
            </span>
          )}
        </p>
        <div className="flex md:gap-10 justify-center pt-3 md:pt-12">
          <a href={props.demolink}>
            <Button title="Demo" />
          </a>
          <a href={props.repolink}>
            <Button title="Repository" />
          </a>
        </div>
      </div>
    </div>
  );
}
