import heroImage from "../img/heroimage.jpg"
import StyledButton from "./styles/Button.styled"
import StyledContainer from "./styles/Container.styled"
import StyledHeroSection from "./styles/HeroSection.styled"

const HeroSection = function() {
    return (
        <StyledContainer className="projects-section">
            <StyledHeroSection>
                <img src={heroImage} alt="Michael Flanagan dressed in a suit." />
                <div>
                    <h1>Michael Flanagan,</h1>
                    <h2>web developer</h2>
                    <p>Hello! I'm a web developer based in Oklahoma City.  I love working with web technologies and learning new skills.</p>
                    <StyledButton bg={'#fc4a1a'}>Get My Resume</StyledButton>
                    <StyledButton bg={'#f7b733'}>michael@michaelflanagan.dev</StyledButton>
                </div>
            </StyledHeroSection>
        </StyledContainer>
    )
}

export default HeroSection