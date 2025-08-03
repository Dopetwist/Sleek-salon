import React from "react";

function Nav() {
    return (
        // Header Section

        <header className="header">
            <a href="#" className="logo">Sleek</a>

            <nav className="navbar">
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#services">Our Services</a>
                <a href="#gallery">Gallery</a>
                <a href="#products">Products</a>
                <a href="#contact">Contact Us</a>
            </nav>
        </header>
    )
}

export default Nav;