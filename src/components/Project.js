import StyledProject from "./styles/Project.styled.js"
import StyledButton from "./styles/Button.styled.js"
import Badge from "./Badge.js"
import * as Scroll from "react-scroll"

var scroll = Scroll.animateScroll;

const Project = function({item: { id, title, summary, lessons, thumbnail, alt, technologies, video, link, github } }) {
    function clickHandler(url) {
        if (url === 'top') {
            scroll.scrollToTop();
        }
        else 
            window.open(url, "_blank")
    }

    return(
        <StyledProject layout={id % 2 === 0 && 'row-reverse'}>
            <article>
                <h3>{title}</h3>
                <a href={video} target="_blank" rel="noreferrer"><img src={thumbnail} alt={alt} /></a>
                <StyledButton border="#E6E6FA" bg="#2F2832" onClick={() => clickHandler(link)}>See it Live</StyledButton>
                <StyledButton border="#E6E6FA" bg="#2F2832" onClick={() => clickHandler(github)}>GitHub</StyledButton>
                <h3>Tech Stack Used</h3>
                <section>
                    {technologies.map((tech) => {
                        return (
                            <Badge key={tech} tech={tech} />
                        )
                    })}
                    
                </section>
                
            </article>
            <article>
                <h3>Summary</h3>
                {summary.map((sum) => {
                    return <p key={sum}>{sum}</p>
                })}
                <h3>Lessons</h3>
                {lessons.map((lesson) => {
                    return <p key={lesson}>{lesson}</p>
                })}
            </article>
            
        </StyledProject>
    )
}

export default Project