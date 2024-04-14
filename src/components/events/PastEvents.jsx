import React, { useState, useEffect } from "react";
import event1 from "../../assets/events/event1.jpg";
import event2 from "../../assets/events/event2.jpg";
import event3 from "../../assets/events/event3.jpg";
import event4 from "../../assets/events/event4.jpg";

function PastEvents() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen font-body font-light bg-primaryBackground text-white pt-16 lg:pt-32 space-y-20">
      <div className="relative">
        <span className="font-bold text-6xl">EVENTS</span>
        <span className="font-bold outline-heading text-6xl absolute left-2">
          EVENTS
        </span>
        <div className="bg-[#ef4444] h-2 w-24 mr-auto ml-60 mt-2"></div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-full lg:w-2/3">
          <div className="relative h-64 lg:h-96 rounded-sm overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={[event1, event2, event3, event4][currentImageIndex]}
              alt={`event ${currentImageIndex + 1}`}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center">
        <div className="lg:w-2/3">
          <p className="text-base lg:text-lg mt-6 lg:mt-8 mx-4 lg:mx-0">
            <b>
              <u>
                Reflecting on the Victory of iVolution '23: A Swift Coding Club
                SRM Extravaganza
              </u>
            </b>
            <br />
            <br />
            iVolution '23, the enthusiastically expected occasion facilitated by
            Swift Coding Club SRM, has cleared out a permanent check on the
            Swift Development community. From September 11th to 13th, 2023,
            members submerged themselves in a world of Swift UI/UX and Swift App
            Development, guided by industry lights.
            <br />
            <br />
            With regarded speakers like Cheriyan Manalel, Designlab Mentor and
            UX Lead at WebCardio, gloating over 8 years, a long time of mastery,
            and Kashish Sharma, a previous GSoC '23 at MIT and ex-SDE Intern at
            Mercedes Benz, the occasion showcased the apex of Swift advancement.
            <br />
            <br />
            Drawing around 150+ energetic students, iVolution '23 was not fair a
            victory but a confirmation to the Swift Coding Club SRM's commitment
            to excellence. As we affectionately think back on the event's
            achievements, we energetically expect future endeavors that will
            without a doubt proceed to raise the Swift advancement Landscape.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PastEvents;
