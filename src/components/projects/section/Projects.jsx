import ProjectCard from "./ProjectCard";
import ProjectsData from "./ProjectsData";

function Projects() {
  return (
    <div className="min-h-full bg-primaryBackground text-white px-20 py-16">
      <div className="w-1/4">
        <span className="font-bold text-6xl">PROJECTS</span>
        <div className="bg-[#ef4444] h-2 w-24 ml-auto mt-2"></div>
      </div>
      <div className="projects-section p-10">
        <ul className="flex overflow-x-scroll list-none h-full margin-auto py-10 gap-10 projects-scrollbar">
          {ProjectsData.map((element) => (
            <li key={element.key}>
              <ProjectCard
                title={element.title}
                description={element.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
