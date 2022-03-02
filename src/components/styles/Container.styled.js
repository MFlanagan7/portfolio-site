import styled from "styled-components"


const StyledContainer = styled.div`
    background: url(${({ bg }) => bg });
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
`

export default StyledContainer