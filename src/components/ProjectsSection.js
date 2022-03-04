import StyledProjectsSection from "./styles/ProjectsSection.styled"
import Project from "./Project"
import { projects } from "../projects"
import StyledButton from "./styles/Button.styled"

const ProjectsSection = function () {
    return (
        <StyledProjectsSection className="projects-section">
            <h1>Recent Projects</h1>
            {projects.map((item, index) => (
                <Project key={index} item={item} />
                
            ))}
            <div>
                <StyledButton>See More Projects</StyledButton>
            </div>
        </StyledProjectsSection>
    )
}

export default ProjectsSection