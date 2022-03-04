import styled from "styled-components"

const StyledNavbar = styled.div`
    background: rgba( 200, 200, 200, 0.1 );
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    z-index: 5;

    img {
        height: 50px;
        width: 50px;
        margin: 5px 0 0 25px;
        cursor: pointer;
    }

    img:hover {
        height: 55px;
        width: 55px;
        margin: 0 0 0 20px;
    }

    span {
        height: 55px;
        width: 55px;
        margin: 7px 30px 0 0;
        cursor: pointer;
        font-size: 44px;
        display: flex;
        justify-content: center;
    }

    button {
        display: none;
    }

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {

    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        span {
            display: none;
        }

        button {
            display: inline-block;
        }

        div {
            display: flex;
            justify-content: space-between;
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
        
    }
`

export default StyledNavbar