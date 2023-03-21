import Carousel from "framer-motion-carousel";
import Nav from "../../nav/Nav";
import ProjectPageCard from "./ProjectPageCard";
import ProjectsPageData from "./ProjectsPageData";

function ProjectsPage() {
  return (
    <div className="flex flex-col py-8 bg-primaryBackground text-white px-20">
      <div className=" bg-primaryBackground">
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
              </p>
              <ul className="pt-28">
                <li>Building a simple website</li>
                <li>Creating a mobile app</li>
                <li>Developing a game</li>
                <li>Designing a machine learning model</li>
                <li>Building a chatbot</li>
              </ul>
            </div>
          </div>
        </div>
        <Carousel autoPlay={true} loop={true} interval={4000}>
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
