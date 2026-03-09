import { HashLink } from 'react-router-hash-link';

function Nav() {
    return (
        // Nav Section

        <nav className="navbar">
            <HashLink smooth to="/#home">Home</HashLink>
            <HashLink smooth to="/#about">About Us</HashLink>
            <HashLink smooth to="/#services">Our Services</HashLink>
            <HashLink smooth to="/#gallery">Gallery</HashLink>
            <HashLink smooth to="/#products">Products</HashLink>
            <HashLink smooth to="/#contact">Contact Us</HashLink>
        </nav>
    )
}

export default Nav;