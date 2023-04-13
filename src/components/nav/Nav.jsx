import { NavLink, useLocation } from "react-router-dom";
import { Link } from "../utils/CustomLink";

function Nav() {
  const location = useLocation();
  return (
    <nav className="flex justify-between font-semibold sticky top-0 tracking-wide py-8 bg-primaryBackground z-50 saturate-150 bg-opacity-60 backdrop-blur-lg px-20">
      <div className="inline-flex gap-10 items-center">
        <Link
          href={location.pathname === "/" ? "#about" : "/"}
          className="nav-link drop-shadow-[0_25px_25px_#0003]">
          {location.pathname === "/" ? "ABOUT" : "HOME"}
        </Link>
        <NavLink
          to="/projects"
          className="nav-link drop-shadow-[0_25px_25px_#0003]">
          PROJECTS
        </NavLink>
      </div>
      <div className="inline-flex gap-10 items-center">
        <NavLink to="/domains" className="drop-shadow-[0_25px_25px_#0003]">DOMAINS</NavLink>
        <NavLink to="/events" className="drop-shadow-[0_25px_25px_#0003]">EVENTS</NavLink>
        {/* <button>
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
        </button> */}
      </div>
    </nav>
  );
}

export default Nav;
