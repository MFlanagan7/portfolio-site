import styled from "styled-components"

const StyledAboutSection = styled.div`
    background: #121212;
    display: flex;
    flex-direction: column;
    padding: 50px;

    h1 {
        margin: 50px auto;
    }

    h2, p {
        display: flex;
        justify-content: center;
    }

    img {
        margin: 0 auto;
        clip-path: circle(41% at 48%);
        max-width: 300px;
        max-height: 400px;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: wrap;
    }

    p {
        margin: 20px 40px;
        text-indent: 40px;
        font-size: 1.3em;
    }

    aside p {
        text-indent: 0;
    }
`

export default StyledAboutSection