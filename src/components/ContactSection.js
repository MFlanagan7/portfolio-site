import StyledContactSection from "./styles/ContactSection.styled"
import { FcSms } from 'react-icons/fc'
import footerbg from "../img/scissortail.webp"
import StyledContainer from "./styles/Container.styled"
import StyledButton from "./styles/Button.styled"

const ContactSection = function () {
    return (
        <StyledContainer bg={footerbg}>
            <StyledContactSection className="contact-section">
                <h1>Contact</h1>
                <div>
                    <article>
                        <h3>Lets get in touch!</h3>
                        <FcSms size="150px" />
                    </article>
                    <hr />
                    <span>
                        <form name="portfolio-contact" method="post" netlify="true" netlify-honeypot="bot-field" hidden>
                            <input type="hidden" name="form-name" value="portfolio-contact" />
                                <label>Your Name: <input type="text" name="name" /></label>   
                                <label>Your Email: <input type="email" name="email" /></label>
                                <label>Message: <textarea name="message" rows="10" cols="40"></textarea></label>
                            <StyledButton type="submit" bg="teal">Send</StyledButton>
                        </form>
                    </span>
                </div>

            </StyledContactSection>
        </StyledContainer>
    )
}

export default ContactSection