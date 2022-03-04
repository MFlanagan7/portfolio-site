import styled from "styled-components"

const StyledProject = styled.div`
    background: #303030;
    border-radius: 15px;
    border: 2px solid #dcae96;
    box-shadow: 0 0 5px 2px #dcae96;
    display: flex;
    flex-direction: ${({ layout }) => layout || 'row'};
    justify-content: center;
    margin: 20px 100px;

    h2, h3 {
        margin: 25px auto;
    }

    div {
        background: #303030;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        margin: 20px 100px;
    }

    article {
        display: flex;
        flex-direction: column;
        width: 50%;
        padding: 15px 0;
    }

    img {
        margin: 10px auto;
        max-width: 95%;
        border-radius: 15px;
        border: 2px solid lightblue;
        box-shadow: 0 0 5px 2px lightblue;
    }

    img:hover {
        opacity: 0.8;
        cursor: pointer;
    }

    p {
        display: flex;
        justify-content: center;
        padding: 0 25px;
    }

    section {
        display: flex;
        justify-content: center;
        flex-flow: wrap;
    }
`

export default StyledProject