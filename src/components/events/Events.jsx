import React from "react";
import EventPageCard from "./EventPageCard";
import EventPageData from "./EventPageData";

function Events() {
  return (
    <div className="min-h-screen  px-20 py-16">
      <div className="flex p-0">
        <span className="font-bold text-4xl text-underline-offset: 8px underline decoration-[#F18C00] text-white ml-auto ">
          Upcoming Events
        </span>
      </div>
      <div>
        {EventPageData.map((element) => (
          <EventPageCard
            Month={element.Month}
            Date={element.Date}
            Event={element.Event}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;
