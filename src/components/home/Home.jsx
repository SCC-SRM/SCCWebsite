import Snowfall from 'react-snowfall'

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Snowfall snowflakeCount={100} />
      <section className="font-bold font-body text-5xl lg:text-8xl text-center center tracking-wide h-[calc(100vh-96px-100px)] flex flex-col justify-center items-center">
      <p className="outline-heading drop-shadow-[0_25px_25px_#0003] lg:mt-0 mt-8 mx-auto">
          Swift Coding Club
        </p>
        <p className="drop-shadow-[0_25px_25px_#0003] lg:mt-0 mt-8 mx-auto">
          Swift Coding Club
        </p>
        <p className="outline-heading drop-shadow-[0_25px_25px_#0003] lg:mt-0 mt-8 mx-auto">
          Swift Coding Club
        </p>

        {/* <div className="text-sm w-full flex flex-col items-center drop-shadow-[0_25px_25px_#0003] gap-4">
          <div className="flex flex-col items-center">
            {"EXPLORE NOW".split("").map((text, index) => (
              <span key={index} className="tracking-wide">{text == " " ? " ": text}</span>
            ))}
          </div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 -rotate-90">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
              />
            </svg>
          </button>
        </div> */}
      </section>
    </div>
  )
}

export default Home
