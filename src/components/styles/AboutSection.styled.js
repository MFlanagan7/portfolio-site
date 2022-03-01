import styled from "styled-components"

const StyledAboutSection = styled.div`
    background: #121212;
    display: flex;
    flex-direction: column;
    color: white;
    padding: 50px;

    h1 {
        color: white;
        margin: 0 auto;
    }

    img {
        margin-top: 50px;
        clip-path: circle(41% at 48%);
        max-width: 300px;
        max-height: 400px;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    p {
        margin: 20px 40px;
    }
`

export default StyledAboutSection