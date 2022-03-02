import StyledContactSection from "./styles/ContactSection.styled"
import { FcSms } from 'react-icons/fc'
import StyledContainer from "./styles/Container.styled"

const ContactSection = function () {
    return (
        <StyledContainer>
            <StyledContactSection>
                <h1>Contact</h1>
                <div>
                    <span>
                        <h3>Lets get in touch!</h3>
                    <FcSms size="150px" />
                    </span>
                    <hr />
                    <form name="portfolio-contact" method="POST" data-netlify="true">
                        <p>
                            <label>Your Name: <input type="text" name="name" /></label>   
                        </p>
                        <p>
                            <label>Your Email: <input type="email" name="email" /></label>
                        </p>
                        <p>
                            <label>Message: <textarea name="message"></textarea></label>
                        </p>
                        <p>
                            <button type="submit">Send</button>
                        </p>
                    </form>
                </div>

            </StyledContactSection>
        </StyledContainer>
    )
}

export default ContactSection