import styled from "styled-components"

const StyledHeroSection = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 100vh;
    background: rgba(74, 189, 172, 0.5);

    img {
        margin-top: 125px;
        clip-path: circle(41% at 48%);
        max-width: 300px;
        max-height: 400px;
    }

    h1, h2 {
        font-size: 4em;
        color: #121212;
    }

    button {
        height: 2em;
    }

    div {
        margin-top: 125px;
        max-width: 40%;
    }

    p {
        font-size: 2em;
    }
`

export default StyledHeroSection