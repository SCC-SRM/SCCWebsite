import { NavLink, useLocation } from "react-router-dom";
import { Link } from "../utils/CustomLink";

function Nav() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center font-medium uppercase md:gap-10 justify-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <img
            src="/swift.svg"
            className="h-10 w-10"
            alt="Swift Coding Club logo"
          />
          <span className="ml-3 text-xl">Swift Coding Club</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href={isHomePage ? "#about" : "/"}
            className={`md:mr-20 mr-5 hover:text-[#DD524C] nav-link`}
          >
            {isHomePage ? "ABOUT" : "HOME"}
          </Link>
          <NavLink
            to="/projects"
            className="md:mr-20 mr-5 hover:text-[#DD524C] nav-link"
          >
            Projects
          </NavLink>
          <NavLink
            to="/domains"
            className="md:mr-20 mr-5 hover:text-[#DD524C] nav-link"
          >
            Domains
          </NavLink>
          <NavLink
            to="/events"
            className="md:mr-20 mr-5 hover:text-[#DD524C] nav-link"
          >
            Events
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
