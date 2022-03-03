import StyledAboutSection from "./styles/AboutSection.styled"
import heroImage from "../img/heroimage.jpg"
import Badge from "./Badge"
import { skills } from "../projects"

const AboutSection = function() {
    return (
        <StyledAboutSection className="about-section">
            <h1>About Me</h1>
            <div>
                <img src={heroImage} alt="Michael Flanagan dressed in a suit." />
                <article>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </article>
            </div>
            <article>
                <h2>My Tech Stack</h2>
                <p>I'm familiar with the following relevant technologies:</p>
            </article>
            <div>
                {skills.map((tech) => {
                    return (
                        <Badge key={tech} tech={tech} />
                    )
                })}
            </div>
        </StyledAboutSection>
    )
}

export default AboutSection