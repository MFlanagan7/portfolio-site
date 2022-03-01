import StyledBlogPost from "./styles/BlogPost.styled.js"
import asiabg from "../img/asiabg.jpg"

const BlogPost = function({item: { id, title, body, image } }) {
    return(
        <StyledBlogPost>
            {/* <p>{id}</p> */}
            <h3>{title}</h3>
            <div>
                <p>{body}</p>
                <img src={asiabg} alt='An asian city from street view.' />
            </div>
        </StyledBlogPost>
    )
}

export default BlogPost