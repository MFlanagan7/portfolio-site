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

    span {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    p {
        margin: 20px 30px;
        padding: 0;
        text-indent: 40px;
    }

    img {
        height: 100%;
        width: 70%;
        margin: auto;
        max-height: 200px;
        border-radius: 25px;
        box-shadow: 0 0 5px 2px black;
    }

    article img {
        margin-top: 20px;
    }

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
        img {
            height: 100%;
            width: auto;
            margin: auto;
            max-height: 200px;
            border-radius: 25px;
            box-shadow: 0 0 5px 2px black;
        }
    }

    // Medium devices (tablets, 768px and up)
    @media screen and (max-width: 768px) {
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

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {

    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {

    }
`

export default StyledBlogPost