import StyledBlogPost from "./styles/BlogPost.styled.js"
import asiabg from "../img/asiabg.jpg"
import image1 from '../img/Netlify-logo.png'
import image2 from '../img/Huddle-landing-page.png'
import image3 from '../img/growth.jpg'

const BlogPost = function({item: { id, title, body, image, alt } }) {
    function getImageTag(image) {
        if (image === 'netlify') {
            return <img src={image1} alt={alt} />
        } else if (image === 'tasks') {
            return <img src={image2} alt={alt} />
        } else if (image === 'growth') {
            return <img src={image3} alt={alt} />
        } else {
            return <img src={asiabg} alt="An Asian street view with colorful buildings." />
        }
    }

    return(
        <StyledBlogPost layout={id % 2 === 0 && 'row-reverse'}>
            <h3>{title}</h3>
            <div>
                {getImageTag(image)}
                
                <span>
                    {body.map((id) => {
                        return <p key={id}>{id}</p>
                    })}
                </span>
            </div>
        </StyledBlogPost>
    )
}

export default BlogPost