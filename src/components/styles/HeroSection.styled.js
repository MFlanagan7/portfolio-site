import styled from "styled-components"

const StyledHeroSection = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 100vh;
    background: rgba(30, 30, 30, 0.0);
    text-shadow: 2px 2px #1f2025;

    img {
        margin-top: 75px;
        clip-path: circle(41% at 48%);
        max-width: 375px;
        max-height: 500px;
    }

    h1, h2 {
        font-size: 4em;
    }

    button {
        height: 2em;
    }

    div {
        margin-top: 75px;
        max-width: 40%;
    }

    p {
        font-size: 2em;
    }
`

export default StyledHeroSection