import styled from "styled-components"

const StyledHeroSection = styled.div`
    
    height: 100vh;
    background: rgba(30, 30, 30, 0.1);
    text-shadow: 2px 2px #1f2025;
    padding-top: 20vh;

    img {
        display: none;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;

        button {
            min-width: 350px;
            margin-bottom: 25px;
        }
    }

    h1 {
        font-size: 44px;
    }

    h2 {
        font-size: 38px;
    }

    p {
        font-size: 22px;
        margin: 25px;
    }

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
        h1 {
            font-size: 48px;
        }

        h2 {
            font-size: 42px;
        }

        p {
            font-size: 26px;
            margin: 25px;
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-evenly;

        img {
            display: flex;
            clip-path: circle(41% at 48%);
            max-width: 300px;
            max-height: 400px;
            margin: 0 5%;
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        h1 {
            font-size: 52px;
        }

        h2 {
            font-size: 46px;
        }

        p {
            font-size: 30px;
            margin: 25px;
        }
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
        img {
            clip-path: circle(41% at 48%);
            min-width: 24vw;
            min-height: 32vw;
            margin: 0 5%;
        }

        div {
            button {
                min-width: 28vw;
                min-height: 7vh;
                font-size: 4vh;
                border-radius: 10vh 5vh;
                padding: 2vh;
            }
        }

        h1 {
            font-size: 10vh;
        }

        h2 {
            font-size: 8vh;
        }

        p {
            font-size: 6vh;
            margin: 25px;
        }
    }
`

export default StyledHeroSection