import BlogPost from "./BlogPost"
import content from "../content.js"
import StyledBlogSection from "./styles/BlogSection.styled"

const BlogSection = function() {
    return(
        <StyledBlogSection className="blog-section">
            <h1>Recent Posts</h1>
            <div>
                {content.map((item, index) => (
                    <BlogPost key={index} item={item} />
                ))}
            </div>
        </StyledBlogSection>
    )
}

export default BlogSection