import styled from "styled-components"

const StyledButton = styled.button`
    background: ${({ bg }) => bg || 'rgba( 200, 200, 200, 0.0 )'};
    border: ${({ border }) => border || 0};
    color: ${({ textColor }) => textColor || 'white'};
    text-shadow: 2px 2px #1f2025;
    border: 2px solid #1f2025;
    border-radius: 10px;
    padding: 0 15px;
    margin: 5px 10px;
    font-weight: bold;
    font-size: 1.2em;
    min-height: 50px;
    font-family: "Roboto", Arial, sans-serif;
    &:hover {
        background: ${({ hoverbg }) => hoverbg || 'rgba( 200, 200, 200, 0.5 )'};
    }
`

export default StyledButton