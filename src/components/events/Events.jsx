import React from 'react'
import EventPageCard from './EventPageCard'
import EventPageData from './EventPageData'

function Events() {
  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8 max-w-3xl mx-auto z-[1000]">
      {/* <div className="flex p-0">
        <h1 className="font-bold text-4xl underline  decoration-[#F18C00] ml-auto">
          Upcoming Events
        </h1>
      </div>

        {EventPageData.map(element => (
          <EventPageCard
            key={element.Date}
            Month={element.Month}
            Date={element.Date}
            Event={element.Event}
          />
        ))} */}
        <iframe
          src="https://lu.ma/embed-checkout/evt-zQ0jdPo0W8LPz34"
          className='border border-solid border-[#bfcbda88] rounded-md mx-auto w-full h-[650px]'
        ></iframe>
    </div>
  )
}

export default Events
