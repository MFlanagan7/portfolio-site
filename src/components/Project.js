import StyledProject from "./styles/Project.styled.js"
import StyledButton from "./styles/Button.styled.js"
import Badge from "./Badge.js"
import * as Scroll from "react-scroll"

var scroll = Scroll.animateScroll;

const Project = function({item: { id, title, summary, lessons, thumbnail, alt, technologies, link, description, github } }) {
    function clickHandler(url) {
        if (url === 'top') {
            scroll.scrollToTop();
        }
        else 
            window.open(url, "_blank")
    }

    return(
        <StyledProject layout={id % 2 === 0 && 'row-reverse'}>
            <span>
                <h3>{title}</h3>
                <img src={thumbnail} alt={alt} />
                <StyledButton onClick={() => clickHandler(link)}>See it Live</StyledButton>
                <StyledButton>Full Description</StyledButton>
                <StyledButton onClick={() => clickHandler(github)}>GitHub</StyledButton>
                <h3>Tech Stack Used</h3>
                <section>
                    {technologies.map((tech) => {
                        return (
                            <Badge key={tech} tech={tech} />
                        )
                    })}
                    
                </section>
                
            </span>
            <span>
                <h3>Summary</h3>
                <p>{summary}</p>
                <h3>Lessons</h3>
                <p>{lessons}</p>
            </span>
            
        </StyledProject>
    )
}

export default Project