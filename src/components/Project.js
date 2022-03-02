import StyledProject from "./styles/Project.styled.js"
import StyledButton from "./styles/Button.styled.js"
import { AiFillHtml5, AiFillGithub } from "react-icons/ai"
import { DiCss3, DiJavascript1 } from "react-icons/di"
import { SiNetlify } from "react-icons/si"

const Project = function({item: { id, title, summary, lessons, thumbnail, technologies } }) {
    return(
        <StyledProject layout={id % 2 === 0 && 'row-reverse'}>
            <span>
                <h2>{title}</h2>
                <img src={thumbnail} alt="project 1" />
                <StyledButton>See it Live</StyledButton>
                <StyledButton>Full Description</StyledButton>
                <StyledButton>GitHub</StyledButton>
                <h4>Tech Stack Used</h4>
                <section>
                    <aside>
                        <AiFillHtml5 size="50px" />
                        <p>HTML5</p>
                    </aside>
                    <aside>
                        <DiCss3 size="50px" />
                        <p>CSS3</p>
                    </aside>
                    <aside>
                        <DiJavascript1 size="50px" />
                        <p>Javascript</p>
                    </aside>
                    <aside>
                        <AiFillGithub size="50px" />
                        <p>Git & GitHub</p>
                    </aside>
                    <aside>
                        <SiNetlify size="50px" />
                        <p>Netlify</p>
                    </aside>
                </section>
                
            </span>
            <span>
                <h4>Summary</h4>
                <p>{summary}</p>
                <h4>Lessons</h4>
                <p>{lessons}</p>
            </span>
            
        </StyledProject>
    )
}

export default Project