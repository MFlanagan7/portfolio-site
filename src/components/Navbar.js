import StyledNavbar from "./styles/Navbar.styled"
import StyledButton from "./styles/Button.styled"
import logo from "../img/logo.png"

const Navbar = function() {
    return (
        <StyledNavbar>
            <img src={logo} alt="Site logo depicting the letters M and F in orange on a two-toned blue background." />
            <div>
                <StyledButton>PROJECTS</StyledButton>
                <StyledButton>BLOG POSTS</StyledButton>
                <StyledButton>ABOUT</StyledButton>
                <StyledButton>CONTACT</StyledButton>
            </div>
        </StyledNavbar>
    )
}

export default Navbar