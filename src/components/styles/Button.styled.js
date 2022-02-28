import styled from "styled-components"

const StyledButton = styled.button`
    background: ${({ bg }) => bg || 'rgba( 200, 200, 200, 0.0 )'};
    border: ${({ border }) => border || 0};
    border-radius: 10px;
    padding: 10px 15px;
    margin: 10px;
    font-weight: bold;
    font-size: 1.2em;
    font-family: "Roboto", Arial, sans-serif;
    &:hover {
        background: ${({ hoverbg }) => hoverbg || 'rgba( 200, 200, 200, 0.5 )'};
        color: #255f56;
    }
`

export default StyledButton