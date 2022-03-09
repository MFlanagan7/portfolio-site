import heroImage from "../img/heroimage.jpg"
import StyledButton from "./styles/Button.styled"
import StyledHeroSection from "./styles/HeroSection.styled"
import navbg from "../img/okcstreet.jpg"
import StyledContainer from "./styles/Container.styled"
import { BiCopyAlt } from "react-icons/bi"
import { copyEmail } from "../constants"

const HeroSection = function() {
    return (
        <StyledContainer bg={navbg}>
            <StyledHeroSection className="hero-section">
                <img src={heroImage} alt="Michael Flanagan dressed in a suit." />
                <div>
                    <h1>Michael Flanagan,</h1>
                    <h2>web developer</h2>
                    <p>Hello! I'm a web developer based in Oklahoma City.  <br />I love working with web technologies and learning new skills.</p>
                    <StyledButton bg={'#2F2832'}>Get My Resume</StyledButton>
                    <StyledButton bg={'#2F2832'} onClick={copyEmail}><BiCopyAlt /> Get My Email</StyledButton>
                </div>
            </StyledHeroSection>
        </StyledContainer>
    )
}

export default HeroSection