import StyledAboutSection from "./styles/AboutSection.styled"
import heroImage from "../img/heroimage.jpg"

const AboutSection = function() {
    return (
        <StyledAboutSection>
            <h1>About Me</h1>
            <img src={heroImage} alt="Michael Flanagan dressed in a suit." />
        </StyledAboutSection>
    )
}

export default AboutSection