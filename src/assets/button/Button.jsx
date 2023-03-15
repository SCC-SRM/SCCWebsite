export default function button(props) {
  return (
    <div>
      <button className="inline-flex h-12 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-6 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-red-50 hover:text-[#ef4444]  focus:text-[#ef4444] disabled:cursor-not-allowed disabled:text-[#ef4444] disabled:shadow-none ">
        <span>{props.title}</span>
        <span className="relative only:-mx-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            role="graphics-symbol"
            aria-labelledby="title-78 desc-78"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
