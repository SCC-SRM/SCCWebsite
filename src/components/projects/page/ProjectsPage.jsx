import * as React from "react";
import { NavLink } from "react-router-dom";
import Carousel from "framer-motion-carousel";
import ProjectPageCard from "./ProjectPageCard";
import ProjectsPageData from "./ProjectsPageData";

function ProjectsPage() {
  return (
    <div className="flex flex-col px-20 py-8 bg-[#1d1d1d] text-white">
      <nav className="flex justify-between font-semibold mb-6 h-full tracking-wide">
        <div className="inline-flex gap-10 items-center">
          <NavLink to="/" className="nav-link drop-shadow-[0_25px_25px_#0003]">
            ABOUT
          </NavLink>
          <NavLink
            to="/projectspage"
            className="nav-link drop-shadow-[0_25px_25px_#0003]"
          >
            PROJECTS
          </NavLink>
        </div>
        <div className="inline-flex gap-10 items-center">
          <button className="drop-shadow-[0_25px_25px_#0003]">EVENTS</button>
          <button>
            <svg
              height="16"
              viewBox="0 0 28 20"
              fill="none"
              className="drop-shadow-[0_25px_25px_#0003]"
              xmlns="http://www.w3.org/2000/svg"
            >
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

      <div className=" bg-[#1d1d1d]">
      <div className="py-16 pr-20">
        <div className="flex mb-20">
          <div className="mt-48 rotate-90">
            <h1 className="font-bold text-7xl">PROJECTS</h1>
            <div className="bg-[#ef4444] h-2 w-24 ml-auto mt-2 -mr-7"></div>
          </div>
          <div>
            <p className="text-lg">
              Our coding club is all about hands-on learning and building
              projects. Our projects cover a wide range of topics and
              technologies, from beginner-friendly tutorials to more advanced
              challenges. Whether you're just starting out or are already a
              seasoned coder, we have something for everyone. Some of our
              popular projects include:
              <ul  className="pt-28">
                <li>Building a simple website</li>
                <li>Creating a mobile app</li>
                <li>Developing a game</li>
                <li>Designing a machine learning model</li>
                <li>Building a chatbot</li>
              </ul>
            </p>
          </div>
        </div>
        </div>
        <Carousel autoPlay={false} loop={true}>
          {ProjectsPageData.map((element) => (
            <ProjectPageCard
              key={element.key}
              title={element.title}
              description={element.description}
              image={element.image}
              repolink={element.repolink}
              demolink={element.demolink}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ProjectsPage;
