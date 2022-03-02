import styled from "styled-components"

const StyledContactSection = styled.div`
    background: rgba(30, 30, 30, 0.2);
    display: flex;
    flex-direction: column;

    h1 {
        margin: 40px auto;
    }

    h3 {
        display: flex;
        align-items: center;
        margin-right: 100px;
    }

    span {
        display: flex;
        justify-content: center;
        margin: 20px 0;
    }

    div {
        background: rgba( 18, 18, 18, 0.4 );
        backdrop-filter: blur( 10px );
        -webkit-backdrop-filter: blur( 10px );
        border-radius: 25px;
        margin: 40px auto;
        padding: 30px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px auto;
    }

    input, textarea {
        margin: 0 20px;
        display: flex;
        align-items: right;
    }
`

export default StyledContactSection