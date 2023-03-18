import Nav from "../nav/Nav";

function Home() {
  return (
    <div className="min-h-screen flex flex-col px-20 py-8 bg-primaryBackground text-white">
      <Nav />
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
