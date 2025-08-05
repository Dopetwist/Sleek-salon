import React from "react";
import Men from "./Men.jsx";
import Women from "./Women.jsx";
import Pedicure from "./Pedicure.jsx";



function Gallery() {
    return (
        // Gallery section design

        <section className="gallery" id="gallery">
            <h2 className="heading">Gallery</h2>
            <h3>Men <span>Section</span></h3>

            <Men />

            <Women />

            <Pedicure />
        </section>
    )
}

export default Gallery;