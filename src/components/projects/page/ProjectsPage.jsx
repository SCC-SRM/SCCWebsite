import Carousel from "framer-motion-carousel";
import Nav from "../../nav/Nav";
import ProjectPageCard from "./ProjectPageCard";
import ProjectsPageData from "./ProjectsPageData";
import React, { useEffect, useState } from "react";
import MobileProjectPageCard from "./MobileProjectPageCard";
function ProjectsPage() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex flex-col py-8 bg-primaryBackground text-white px-20">
      <div className=" bg-primaryBackground">
        <div className="md:py-16 md:pr-20 ">
          <h1 className="font-bold md:text-7xl sm:text-5xl text-4xl">
            PROJECTS
          </h1>
          <div className="bg-[#ef4444] h-2 md:block md:w-96 hidden"></div>
          <div className="flex md:mb-10 mb-5">
            <div className="mt-16"></div>
            <div>
              <p className="max-w-5xl md:text-xl text-lg lg:text-3xl font-extralight pt-4 sm:pt-5 md:pt-10 sm:text-justify">
                Swift coding club is all about hands-on learning and building
                projects. Our projects cover a wide range of topics and
                technologies, from beginner-friendly tutorials to more advanced
                challenges. Whether you're just starting out or are already a
                seasoned coder,
                <span className="text-[#ef4444]">
                  {" "}
                  we have something for everyone.{" "}
                </span>
                <div className="mt-3"></div>
                Some of our popular projects include:
              </p>
              {/* <ul className="pt-20 text-xl">
                <li>- Building a simple website</li>
                <li>- Creating a mobile app</li>
                <li>- Developing a game</li>
                <li>- Designing a machine learning model</li>
                <li>- Building a chatbot</li>
              </ul> */}
            </div>
          </div>
        </div>

        {screenWidth < 1000 ? (
          <div className="bg-red-200 flex flex-col justify-center items-center">
            {ProjectsPageData.map((element) => (
              <MobileProjectPageCard
                key={element.key}
                title={element.title}
                description={element.description}
                image={element.image}
                repolink={element.repolink}
                demolink={element.demolink}
              />
            ))}
          </div>
        ) : (
          // Render components for larger screens (width >= 768)
          <div>
            <Carousel autoPlay={true} loop={true} interval={6000}>
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
        )}
      </div>
    </div>
  );
}

export default ProjectsPage;
