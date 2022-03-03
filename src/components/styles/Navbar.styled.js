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

    img {
        height: 50px;
        width: 50px;
        margin: 5px 0 0 10px;
        cursor: pointer;
    }

    img:hover {
        height: 55px;
        width: 55px;
        margin: 0 0 0 5px;
    }

    button {
        cursor: pointer;
    }
`

export default StyledNavbar