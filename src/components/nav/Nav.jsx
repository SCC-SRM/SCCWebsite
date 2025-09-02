import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link } from "../utils/CustomLink";

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur supports-[backdrop-filter]:bg-primaryBackground/60 bg-primaryBackground/90">
        <div className="flex justify-between items-center md:px-10 px-4 py-3">
          <Link href="/" className="flex title-font font-medium items-center">
            <img
              src="/swift.svg"
              className="h-14 w-14"
              alt="Swift Coding Club logo"
            />
          </Link>
          {/* nav: desktop only */}
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
          {/* mobile nav btn - toggles state */}
          <button
            className="md:hidden text-white p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-primaryBackground/95 backdrop-blur-sm border-t border-white/10">
            <nav className="flex flex-col py-4 px-4 space-y-4">
              <Link
                href="/"
                className="text-white/80 hover:text-white transition-all duration-300 py-2 px-4 rounded-lg hover:bg-white/10"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-white/80 hover:text-white transition-all duration-300 py-2 px-4 rounded-lg hover:bg-white/10"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
              <Link
                href="/domains"
                className="text-white/80 hover:text-white transition-all duration-300 py-2 px-4 rounded-lg hover:bg-white/10"
                onClick={closeMobileMenu}
              >
                Domains
              </Link>
              <Link
                href="/recruitments"
                className="text-white/80 hover:text-white transition-all duration-300 py-2 px-4 rounded-lg hover:bg-white/10 flex items-center gap-2"
                onClick={closeMobileMenu}
              >
                Recruitments
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Nav;
