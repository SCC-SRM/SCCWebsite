import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "../utils/CustomLink";

function Nav() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="body-font">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between font-medium md:gap-10">
        {/* Logo */}
        <Link
          href="/"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <img
            src="/swift.svg"
            className="h-24 w-24"
            alt="Swift Coding Club logo"
          />
        </Link>
        {/* Hamburger Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <div className={`w-6 h-1 rounded-sm bg-white mb-1 ${menuOpen ? "rotate-45" : ""}`}></div>
          <div className={`w-6 h-1 rounded-sm bg-white mb-1 ${menuOpen ? "opacity-0" : ""}`}></div>
          <div className={`w-6 h-1 rounded-sm bg-white mb-1 ${menuOpen ? "-rotate-45" : ""}`}></div>
        </div>
        {/* Navbar */}
        <nav className={`font-body md:flex md:flex-wrap items-center text-base ${menuOpen ? "block" : "hidden"}`}>
          <Link
            href={isHomePage ? "#about" : "/"}
            className={`md:mr-10 mr-5 hover:text-[#DD524C] nav-link`}
          >
            {isHomePage ? "ABOUT" : "HOME"}
          </Link>
          <NavLink
            to="/projects"
            className="md:mr-10 mr-5 hover:text-[#DD524C] nav-link"
          >
            PROJECTS
          </NavLink>
          <NavLink
            to="/domains"
            className="md:mr-10 mr-5 hover:text-[#DD524C] nav-link"
          >
            DOMAINS
          </NavLink>
          <NavLink
            to="/events"
            className="md:mr-10 mr-5 hover:text-[#DD524C] nav-link"
          >
            EVENTS
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
