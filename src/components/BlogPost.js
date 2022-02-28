import StyledBlogPost from "./styles/BlogPost.styled"

const BlogPost = function({ bg, hoverbg, border }) {
    return(
        <StyledBlogPost bg={bg} hoverbg={hoverbg} border={border} />
    )
}

export default BlogPost