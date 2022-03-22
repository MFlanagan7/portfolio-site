import styled from "styled-components"

const StyledProject = styled.div`
    background: #303030;
    border-radius: 15px;
    border: 2px solid #dcae96;
    box-shadow: 0 0 5px 2px #dcae96;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        margin: 25px auto;
    }

    div {
        background: #303030;
        border-radius: 15px;
    }

    article {
        display: flex;
        flex-direction: column;
        padding: 15px 0;
    }

    img {
        margin: 10px auto;
        max-width: 80%;
        width: auto;
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
        padding: 10px 25px;
        text-indent: 40px;
    }

    section {
        display: flex;
        justify-content: center;
        flex-flow: wrap;
    }

    button {
        margin: 10px auto;
        width: 80%;
    }

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
        button {
            margin: 10px auto;
            width: 80%;
        }
    }

    // Large devices (desktops, 768px and up)
    @media (min-width: 768px) {
        flex-direction: ${({ layout }) => layout || 'row'};
        align-items: flex-start;

        article {
            width: 50%;
        }

        img {
            max-width: 95%;
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        h3 {
            font-size: 26px;
        }

        p {
            font-size: 20px;
        }

        img {
            width: 95%;
        }
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
        h3 {
            font-size: 4vh;
        }

        p {
            font-size: 3vh;
        }

        button {
            font-size: 4vh;
            border-radius: 10vh 5vh;
            padding: 1vh;
        }
    }
`

export default StyledProject