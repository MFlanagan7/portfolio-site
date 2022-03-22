import styled from "styled-components"


const StyledContainer = styled.div`
    background: url(${({ bg }) => bg });
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;

    aside {
        visibility: hidden;
        opacity: 0;
        position: fixed;
        left: 45%;
        bottom: 50px;
        width: 150px;
        height: 50px;
        text-align: center;
        padding-top: 10px;
        background: black;
        border-radius: 10px;
        transition: visibility 0s, opacity 0.5s;
    }
`

export default StyledContainer