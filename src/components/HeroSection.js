import StyledButton from "./styles/Button.styled"
import StyledHeroSection from "./styles/HeroSection.styled"
import navbg from "../img/okcstreet.webp"
import StyledContainer from "./styles/Container.styled"
import { BiCopyAlt } from "react-icons/bi"
import { copyEmail } from "../constants"

const HeroSection = function() {
    return (
        <StyledContainer bg={navbg}>
            <StyledHeroSection className="hero-section">
                <div>
                    <h1>Michael Flanagan,</h1>
                    <h2>web developer</h2>
                    <p>Hello! I'm a web developer based in Oklahoma City.  <br />I love working with web technologies and learning new skills.</p>
                    <StyledButton bg={'#2F2832'} onClick={ () => {
                        window.open("https://drive.google.com/file/d/1M9QmagaOFs_gK-jZX1lApHX83ewdsls3/view?usp=sharing", "_blank")
                    } }>Get My Resume</StyledButton>
                    <StyledButton bg={'#2F2832'} onClick={copyEmail}><BiCopyAlt /> Get My Email</StyledButton>
                </div>
            </StyledHeroSection>
        </StyledContainer>
    )
}

export default HeroSection