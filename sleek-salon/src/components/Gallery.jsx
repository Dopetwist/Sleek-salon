import React from "react";

function Gallery() {
    return (
        // Gallery section design

        <section className="gallery" id="gallery">
            <h2 className="heading">Gallery</h2>
            <h3>Men <span>Section</span></h3>

            // Men Gallery layout

            <div className="gallery-content">
                <div className="gallery-box">
                    <img src="images/men1.jpeg" alt="" />
                </div>
            </div>

            // Women Gallery layout

            <div className="adjust-container">
                <h3>Women <span>Section</span></h3>

                <div className="gallery-content">
                    <div className="gallery-box">
                        <img src="images/women1.jpeg" alt="" />
                    </div>
                </div>
            </div>

            // Pedicure Gallery layout

            <div className="adjust-container">
                <h3>Pedicure & <span>Manicure</span></h3>

                <div className="gallery-content ped-margin">
                    <div className="gallery-box">
                        <img src="images/pedicure1.jpeg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery;