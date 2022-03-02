import StyledButton from "./styles/Button.styled"
import StyledProjectsSection from "./styles/ProjectsSection.styled"

const ProjectsSection = function () {
    return (
        <StyledProjectsSection>
            <h1>Projects</h1>
            <div>
                <span>
                    <StyledButton>See it Live</StyledButton>
                    <StyledButton>Full Description</StyledButton>
                    <StyledButton>GitHub</StyledButton>
                </span>
                <span>
                    
                </span>
            </div>
        </StyledProjectsSection>
    )
}

export default ProjectsSection