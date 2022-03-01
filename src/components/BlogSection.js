import BlogPost from "./BlogPost"
import content from "../content.js"
import StyledBlogSection from "./styles/BlogSection.styled"

const BlogSection = function() {
    return(
        <StyledBlogSection>
            {content.map((item, index) => (
                <BlogPost key={index} item={item} />
            ))}
        </StyledBlogSection>
    )
}

export default BlogSection