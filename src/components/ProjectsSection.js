import StyledProjectsSection from "./styles/ProjectsSection.styled"
import Project from "./Project"
import projects from "../projects"

const ProjectsSection = function () {
    return (
        <StyledProjectsSection className="projects-section">
            <h1>Recent Projects</h1>
            {projects.map((item, index) => (
                <Project key={index} item={item} />
            ))}
            
        </StyledProjectsSection>
    )
}

export default ProjectsSection