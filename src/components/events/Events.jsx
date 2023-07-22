
import React from "react";
import EventPageCard from "./EventPageCard";
import EventPageData from "./EventPageData";

function Events() {
  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex p-0">
        <h1 className="font-bold text-4xl underline  decoration-[#F18C00] ml-auto">
          Upcoming Events
        </h1>
      </div>
      
        {EventPageData.map((element) => (
          <EventPageCard
            key={element.Date}
            Month={element.Month}
            Date={element.Date}
            Event={element.Event}
          />
        ))}
      
    </div>
  );
}

export default Events;

