import styled from "styled-components"

const StyledBlogPost = styled.div`
    margin: 25px;
    padding: 10px;
    border: 2px solid grey;
    border-radius: 25px;

    h3 {
        display: flex;
        justify-content: center;
    }

    div {
        display: flex;
        justify-content: space-between;
        padding: 10px 25px;
    }

    p {
        margin: 0;
        padding: 0;
    }

    img {
        max-height: 200px;
    }
`

export default StyledBlogPost