import StyledNavbar from "./styles/Navbar.styled"
import Button from "./styles/Button.styled"
import logo from "../img/MF-transparent.png"
import { Link } from "react-scroll"


const Navbar = function() {
    return (
        <StyledNavbar>
            <Link to="hero-section" spy={true} smooth={true}>
                <img src={logo} alt="Site logo depicting the letters M and F in orange on a two-toned blue background." />
            </Link>
            <div>
                <Link activeClass="active" to="projects-section" spy={true} smooth={true}>
                    <Button>Projects</Button>
                </Link>
                <Link to="blog-section" spy={true} smooth={true}>
                    <Button>Blog Posts</Button>
                </Link>
                <Link to="about-section" spy={true} smooth={true}>
                    <Button>About</Button>
                </Link>
                <Link to="contact-section" spy={true} smooth={true}>
                    <Button>Contact</Button>
                </Link>
            </div>
        </StyledNavbar>
    )
}

export default Navbar