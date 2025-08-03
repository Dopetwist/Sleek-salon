import React from "react";

function Home() {
    return (
        // Home section design

        <section className="home" id="home">
            <div className="home-content">
                <div className="logo-img">
                    <img src="images/logo.jpeg" alt="" />
                </div>

                <h2>Sleek <span>Unisex Salon</span></h2>
                <p>We are committed to make our clients feel beautiful, inside and out,
                    by providing top-quality beauty services and unique styles that enhance their natural beauty.</p>
                    
                <div className="social-icons">
                    <a href="#"><i className='bx bxl-facebook-circle'></i></a>
                    <a href="#"><i className='bx bxl-instagram-alt' ></i></a>
                    <a href="#"><i className='bx bxl-linkedin'></i></a>
                    <a href="#"><i className='bx bxl-twitter' ></i></a>
                    <a href="#"><i className='bx bxl-youtube' ></i></a>
                </div>
            </div>
        </section>
    )
}

export default Home;