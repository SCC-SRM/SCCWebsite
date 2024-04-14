import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Link } from "../utils/CustomLink";
import Results from "../results/Results";

function Nav() {
  const location = useLocation();

  return (
    <header className="body-font">
      <div className="flex justify-between items-center md:px-10">
        <Link href="/" className="flex title-font font-medium items-center">
          <img
            src="/swift.svg"
            className="h-24 w-24"
            alt="Swift Coding Club logo"
          />
        </Link>
        {/*<Link
          href={location.pathname === '/' ? '/events' : '/'}
          className="text-center flex items-center justify-center gap-1 text-white bg-[#40231F] border-0 py-2 px-6 focus:outline-none hover:bg-[#40231F] rounded-md text-lg register-button cursor-pointer mr-4 md:mr-0"
          exact
        >
          {location.pathname === '/'
            ? (
                <>
                  Register for the event <ArrowRight className="transition duration-300 slide" />
                </>
              )
            : (
                <>Go back</>
              )}
            </Link>*/}
        {/*<Link
          href="https://8oqahungyy5.typeform.com/to/oFNPeOqN"
          className="text-center flex items-center justify-center gap-1 text-white bg-[#40231F] border-0 py-2 px-6 focus:outline-none hover:bg-[#40231F] rounded-md text-lg register-button cursor-pointer mr-4 md:mr-0"
          target="blank"
          exact
        >
          Register for recruitments{" "}
          <ArrowRight className="transition duration-300 slide" />
          </Link>*/}
        <Link
          href=""
          onClick={(e) => {
            e.preventDefault();
            window.open("/Results", "_blank");
          }}
          className="text-center flex items-center justify-center gap-1 text-white bg-[#40231F] border-0 py-2 px-6 focus:outline-none hover:bg-[#40231F] rounded-md text-lg register-button cursor-pointer mr-4 md:mr-0"
        >
          Results <ArrowRight className="transition duration-300 slide" />
        </Link>
      </div>
    </header>
  );
}

export default Nav;
