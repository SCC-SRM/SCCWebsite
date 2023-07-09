import Carousel from "framer-motion-carousel";
import Nav from "../../nav/Nav";
import ProjectPageCard from "./ProjectPageCard";
import ProjectsPageData from "./ProjectsPageData";

function ProjectsPage() {
  return (
    <div className="flex flex-col py-8 bg-primaryBackground text-white px-20">
      <div className=" bg-primaryBackground">
        <div className="py-16 pr-20">
          <div className="flex flex-col">
            <div className="mb-5">
              <div className="heading flex items-center space-x-2">
                <h1 className="font-bold text-7xl">PROJECTS</h1>
                <img className="h-14 animate-pulse" src="/swift.svg" alt="" />
              </div>
              <div className="bg-[#ef4444] h-2 w-[450px]"></div>
            </div>
            <div>
              <p className="text-6xl w-[1000px]">
                Swift coding club is all about hands-on learning and building
                projects. Our projects cover a wide range of topics and
                technologies, from beginner-friendly tutorials to more advanced
                challenges. Whether you're just starting out or are already a
                seasoned coder,{" "}
                <span className="text-orangeHeader">
                  we have something for everyone.{" "}
                </span>
                Some of our popular projects include:
              </p>
              {/* <ul className="pt-28">
                <li>- Building a simple website</li>
                <li>- Creating a mobile app</li>
                <li>- Developing a game</li>
                <li>- Designing a machine learning model</li>
                <li>- Building a chatbot</li>
              </ul> */}
            </div>
          </div>
        </div>
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
    </div>
  );
}

export default ProjectsPage;
