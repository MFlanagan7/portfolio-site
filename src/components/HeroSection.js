import heroImage from "../img/heroimage.jpg"
import StyledButton from "./styles/Button.styled"
import StyledHeroSection from "./styles/HeroSection.styled"

const HeroSection = function() {
    return (
        <StyledHeroSection>
            <img src={heroImage} alt="Michael Flanagan dressed in a suit." />
            <div>
                <h2>Michael Flanagan, web developer</h2>
                <StyledButton>Get My Resume</StyledButton>
                <StyledButton>Michael@MichaelFlanagan.dev</StyledButton>
            </div>
        </StyledHeroSection>
    )
}

export default HeroSection