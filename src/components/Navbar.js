import StyledNavbar from "./styles/Navbar.styled"
import Button from "./styles/Button.styled"
import logo from "../img/MF-transparent.png"
import { Link } from "react-scroll"
import { GiHamburgerMenu } from "react-icons/gi"


const Navbar = function() {
    return (
        <StyledNavbar>
            <Link to="hero-section" spy={true} smooth={true}>
                <img src={logo} alt="Site logo depicting the letters M and F in orange on a two-toned blue background." />
            </Link>
            <div>
                <Link to="projects-section" spy={true} smooth={true}>
                    <Button hoverbg="#393990">Projects</Button>
                </Link>
                <Link to="blog-section" spy={true} smooth={true}>
                    <Button hoverbg="#393990">Blog Posts</Button>
                </Link>
                <Link to="about-section" spy={true} smooth={true}>
                    <Button hoverbg="#393990">About</Button>
                </Link>
                <Link to="contact-section" spy={true} smooth={true}>
                    <Button hoverbg="#393990">Contact</Button>
                </Link>
                <span><GiHamburgerMenu /></span>
            </div>
        </StyledNavbar>
    )
}

export default Navbar