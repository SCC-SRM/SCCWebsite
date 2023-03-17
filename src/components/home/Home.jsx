import {NavLink} from "react-router-dom"

function Home() {
  return (
    <div className="min-h-full flex flex-col px-20 py-8 bg-[#1d1d1d] text-white">
      <nav className="flex justify-between font-semibold mb-6 h-full tracking-wide">
        <div className="inline-flex gap-10 items-center">
          <NavLink to="/" className="nav-link drop-shadow-[0_25px_25px_#0003]" >ABOUT</NavLink>
          <NavLink to="/projectspage" className="nav-link drop-shadow-[0_25px_25px_#0003]" >PROJECTS</NavLink>
        </div>
        <div className="inline-flex gap-10 items-center">
          <button className="drop-shadow-[0_25px_25px_#0003]">EVENTS</button>
          <button>
            <svg
              height="16"
              viewBox="0 0 28 20"
              fill="none"
              className="drop-shadow-[0_25px_25px_#0003]"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 2H26M11.0909 10H26M2 18H26"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </nav>
      <section className="text-9xl flex-1 font-bold flex justify-center flex-col tracking-wide mt-16">
        <p className="drop-shadow-[0_25px_25px_#0003]">
          Swift <br /> Coding <br /> Club
        </p>
        <div className="text-base w-full flex flex-col items-center drop-shadow-[0_25px_25px_#0003] gap-4 mt-24">
          <div className="flex flex-col items-center">
            <p className="uppercase">Innovate, Collaborate. Learn.</p>
          </div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
