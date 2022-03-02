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
        height: 75px;
        width: 75px;
        margin: 5px 0 0 10px;
        cursor: pointer;
    }

    div {
        margin-top: 5px;
    }

    button {
        cursor: pointer;
    }
`

export default StyledNavbar