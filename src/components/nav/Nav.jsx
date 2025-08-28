import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "../utils/CustomLink";

function Nav() {
  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur supports-[backdrop-filter]:bg-primaryBackground/60 bg-primaryBackground/90">
        <div className="flex justify-between items-center md:px-10 py-3">
          <Link href="/" className="flex title-font font-medium items-center">
            <img
              src="/swift.svg"
              className="h-14 w-14"
              alt="Swift Coding Club logo"
            />
          </Link>
          <nav className="hidden md:flex gap-6 text-white/80">
            <Link
              href="/"
              className="hover:text-white transition-all duration-300 hover:scale-105 relative group"
            >
              <span className="relative">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link
              href="/projects"
              className="hover:text-white transition-all duration-300 hover:scale-105 relative group"
            >
              <span className="relative">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link
              href="/domains"
              className="hover:text-white transition-all duration-300 hover:scale-105 relative group"
            >
              <span className="relative">
                Domains
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            {/* <Link href="/events" className="hover:text-white">
              Events
            </Link> */}
            <Link
              href="/recruitments"
              className="hover:text-white transition-all duration-300 hover:scale-105 relative group flex items-center gap-1"
            >
              <span className="relative">
                Recruitments
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </Link>
          </nav>
          <div>
            {/* <Link
              href=""
              onClick={(e) => {
                e.preventDefault();
                window.open("/Results", "_blank");
              }}
              className="text-center flex items-center justify-center gap-1 text-white bg-[#40231F] border-0 py-2 px-5 focus:outline-none hover:bg-[#40231F] rounded-md text-sm md:text-base register-button cursor-pointer mr-4 md:mr-0"
            >
              Results <ArrowRight className="transition duration-300 slide" />
            </Link> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
