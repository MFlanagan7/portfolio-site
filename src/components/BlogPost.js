import StyledBlogPost from "./styles/BlogPost.styled.js"
import asiabg from "../img/asiabg.jpg"

const BlogPost = function({item: { id, title, body, image } }) {
    return(
        <StyledBlogPost layout={id % 2 === 0 && 'row-reverse'}>
            <h3>{title}</h3>
            <div>
                <img src={asiabg} alt='An asian city from street view.' />
                <p>{body}</p>
            </div>
        </StyledBlogPost>
    )
}

export default BlogPost