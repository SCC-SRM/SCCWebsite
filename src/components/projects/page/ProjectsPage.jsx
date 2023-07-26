import Carousel from "framer-motion-carousel";
import Nav from "../../nav/Nav";
import ProjectPageCard from "./ProjectPageCard";
import ProjectsPageData from "./ProjectsPageData";

function ProjectsPage() {
  return (
    <div className="flex flex-col py-8 bg-primaryBackground text-white px-20">
      <div className=" bg-primaryBackground">
        <div className="py-16 pr-20">
          <h1 className="font-bold text-7xl">PROJECTS</h1>
          <div className="bg-[#ef4444] h-2 w-96"></div>
          <div className="flex mb-10">
            <div className="mt-16"></div>
            <div>
              <p className="max-w-5xl mt-5 sm:text-lg text-lg lg:text-3xl  font-extralight pt-10 text-justify">
                Swift coding club is all about hands-on learning and building
                projects. Our projects cover a wide range of topics and
                technologies, from beginner-friendly tutorials to more advanced
                challenges. Whether you're just starting out or are already a
                seasoned coder,
                <span className="text-[#ef4444]">
                  {" "}
                  we have something for everyone.{" "}
                </span>
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
