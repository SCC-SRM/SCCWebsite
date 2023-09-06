import ProjectCard from './ProjectCard'
import ProjectsData from './ProjectsData'

function Projects() {
  return (
    <div className="min-h-full bg-primaryBackground text-white py-16 font-body">
      <div>
        <div class="relative">
          <span class="font-bold text-6xl">PROJECTS</span>
          <span class="font-bold outline-heading text-6xl absolute left-2 ">
            PROJECTS
          </span>
          <div className="bg-[#ef4444] h-2 w-24 mr-auto ml-60 mt-2"></div>
        </div>
      </div>
      <div className="projects-section p-10">
        <ul className="flex overflow-x-scroll list-none h-full margin-auto py-10 gap-10 projects-scrollbar">
          {ProjectsData.map(element => (
            <li key={element.key}>
              <ProjectCard
              image={element.image}
                title={element.title}
                description={element.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Projects
