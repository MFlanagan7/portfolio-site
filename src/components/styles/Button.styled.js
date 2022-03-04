import styled from "styled-components"

const StyledButton = styled.button`
    background: ${({ bg }) => bg || 'rgba( 200, 200, 200, 0.0 )'};
    border: ${({ border }) => border || 'none'};
    color: ${({ textColor }) => textColor || 'white'};
    text-shadow: 2px 2px #1f2025;
    border: 2px solid #E6E6FA;
    box-shadow: 0 0 5px 2px #E6E6FA;
    border-radius: 40px 20px;
    padding: 0 15px;
    margin: 5px 10px;
    font-weight: bold;
    font-size: 1.2em;
    min-height: 50px;
    /* font-family: "Roboto", Arial, sans-serif; */
    &:hover {
        background: ${({ hoverbg }) => hoverbg || '#191970'};
        cursor: pointer;
    }
`

export default StyledButton