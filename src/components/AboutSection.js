import StyledAboutSection from "./styles/AboutSection.styled"
import Badge from "./Badge"
import { skills } from "../projects"

const AboutSection = function() {
    return (
        <StyledAboutSection className="about-section">
            <h1>About Me</h1>
            <div>
                <article>
                    <p>Hi! I’m Michael</p>
                    <p>I’ve had an interest in technology my whole life.  I grew up playing the next cool  Nintendo game that was released and being amazed at how games worked.  I remember negotiating with my sister who wanted to call and talk with her friends to let me use the only phone line in the house to surf the internet, download cool games from BBS boards, and browse AOL chat rooms.</p>
                    <p>At the time, I had no idea what a DMA channel or IRQ address was, only that they had to be setup properly for me to play the games I downloaded and hear sounds in them.  Now, as a computer scientist I have come full circle and understand a great deal more than that.  </p>
                    <p>Technology has come a long way in from where it used to be, and it shows no signs of slowing down. I love learning for learnings sake, and I am excited to continue learning new technologies as they develop.  I remember taking a web design course in high school and it taught HTML and CSS which were all we had it seemed (I think Javascript was still pretty new too) and now there are so many tools available its astounding.</p>
                    <p>I am currently taking courses at university and have learned so much already; most recently: Data Structures and Algorithms, Computer Organization, and Software Engineering to name a few.  I’ve gotten to learn from some excellent people and I have rekindled my passion for writing code; making something out of nothing.</p>
                    <p>I’ve always enjoyed programming as a hobbyist and have worked on many small personal projects over the years but now I feel the time is right for me to take it to the next level and do it professionally.  Returning to my humble beginnings with technology and web development, all of my life’s experiences will inform and aid me as I focus all of my energy and knowledge into becoming the best web developer I can be, hoping to work in this industry for the rest of my professional life.</p>
                    <p>I know I might be late in the game, but I’m studying new technologies every day, coding and building projects as often as I can, and looking forward to gaining work experience in web development related companies.</p>
                    <p>I’m a firm believer in the growth mindset concept, and that “life is not about finding yourself, but about creating yourself” (George Bernard Shaw). </p>
                    
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