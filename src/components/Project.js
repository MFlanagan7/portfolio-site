import StyledProject from "./styles/Project.styled.js"
import StyledButton from "./styles/Button.styled.js"

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
                <p>{technologies}</p>
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