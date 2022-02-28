import StyledButton from "./styles/Button.styled"

const Button = function({ bg, hoverbg, border }) {
    return(
        <StyledButton bg={bg} hoverbg={hoverbg} border={border} />
    )
}

export default Button