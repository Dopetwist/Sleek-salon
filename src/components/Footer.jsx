
import { currentYear } from "../func";

function Footer() {
    return (
        // Footer Section Design

        <footer className="footer" id="footer">
            <div className="footer-container">
                <p> &copy; <span id="year">{currentYear}</span>, Sleek Unisex Salon || All rights reserved.</p>
                <a href="#header"><i className='bx bx-up-arrow-alt'></i></a>
            </div>
        </footer>
    )
}

export default Footer;