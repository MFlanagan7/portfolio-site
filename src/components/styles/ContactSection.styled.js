import styled from "styled-components"

const StyledContactSection = styled.div`
    background: rgba(30, 30, 30, 0.3);
    display: flex;
    flex-direction: column;

    h1 {
        margin: 75px auto;
    }

    h3 {
        display: flex;
        align-items: center;
    }

    article {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
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

    label {
        width: 90%;
        margin: 5px;
    }

    input, textarea {
        width: inherit;
        margin: 0 20px;
        padding: 5px;
        display: flex;
        align-items: right;
        border-radius: 20px;
    }

    textarea {
        resize: vertical;
        margin-bottom: 15px;
    }
`

export default StyledContactSection