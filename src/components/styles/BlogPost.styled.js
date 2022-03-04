import styled from "styled-components"

const StyledBlogPost = styled.div`
    margin: 25px;
    padding: 10px;
    border: 2px solid grey;
    border-radius: 20px;
    box-shadow: 0 0 5px 2px grey;

    h3 {
        display: flex;
        justify-content: center;
    }

    div {
        display: flex;
        flex-direction: ${({ layout }) => layout || 'row'};
        justify-content: space-between;
        padding: 10px 25px;
    }

    p {
        margin: 0 30px;
        padding: 0;
    }

    img {
        height: 10vh;
        width: auto;
        max-height: 200px;
        border-radius: 25px;
        box-shadow: 0 0 5px 2px black;
    }

    @media screen and (max-width: 70em) {
        div {
            display: flex;
            flex-direction: column;
            flex-flow: wrap;
            padding: 10px 25px;
        }

        img {
            margin: 20px auto;
        }

        p {
            margin-top: 10px;
            text-align: justify;
            text-justify: auto;
        }
    }
`

export default StyledBlogPost