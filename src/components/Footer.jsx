import { currentYear } from "../func";

function Footer() {
    return (
        // Footer Section Design

        <footer className="footer" id="footer">
            <div className="footer-container">
                <p> &copy; <span id="year">{currentYear}</span>, Sleek Unisex Salon. All rights reserved.</p>
                
                <button
                id="back-to-top"
                onClick={() => window.scroll(scrollTo, "Top")}
                ><i className='bx bx-up-arrow-alt'></i></button>
            </div>
        </footer>
    )
}

export default Footer;