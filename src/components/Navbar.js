import StyledNavbar from "./styles/Navbar.styled"
import Button from "./styles/Button.styled"
import logo from "../img/MF-transparent.png"
import { Link } from "react-scroll"
import { GiHamburgerMenu } from "react-icons/gi"


const Navbar = function() {
    function toggleMobileNav() {
        let section = document.querySelector('section');
        if (section.style.opacity === '0') {
            section.style.opacity = '1';
        }
        else {
            section.style.opacity = '0';
        }
    }

    return (
        <StyledNavbar>
            <Link to="hero-section" spy={true} smooth={true}>
                <img src={logo} alt="Site logo depicting the letters M and F in white on a black circle." />
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
                <span onClick={toggleMobileNav}><GiHamburgerMenu /></span>
                <section>
                    <Link to="projects-section" spy={true} smooth={true} onClick={toggleMobileNav}>
                        <p>Projects</p>
                    </Link>
                    <Link to="blog-section" spy={true} smooth={true} onClick={toggleMobileNav}>
                        <p>Blog Posts</p>
                    </Link>
                    <Link to="about-section" spy={true} smooth={true} onClick={toggleMobileNav}>
                        <p>About</p>
                    </Link>
                    <Link to="contact-section" spy={true} smooth={true} onClick={toggleMobileNav}>
                        <p>Contact</p>
                    </Link>
                </section>
            </div>
        </StyledNavbar>
    )
}

export default Navbar