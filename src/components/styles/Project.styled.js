import styled from "styled-components"

const StyledProject = styled.div`
    background: #303030;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    margin: 20px 100px;

    h2, h4 {
        margin: 25px auto;
    }

    div {
        background: #303030;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        margin: 20px 100px;
    }

    span {
        display: flex;
        flex-direction: column;
        width: 50%;
        padding: 15px 0;
    }

    img {
        margin: 0 auto;
        max-width: 95%;
        clip-path: border-box;
        border-radius: 15px;
    }

    p {
        display: flex;
        justify-content: center;
        padding: 0 25px;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 55px;
    }
`

export default StyledProject