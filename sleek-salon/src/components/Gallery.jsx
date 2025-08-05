import React from "react";
import Men from "./Men.jsx";
import Women from "./Women.jsx";
import Pedicure from "./Pedicure.jsx";
import { menPhotos, womenPhotos, pedicurePhotos } from "./index.js";

function displayMen (single) {
    return (
        <Men 
        id={single.id}
        key={single.id}
        image={single.img}
        />
    )
}

function displayWomen (single) {
    return (
        <Women 
        id={single.id}
        key={single.id}
        image={single.img}
        />
    )
}

function displayPedicure (single) {
    return (
        <Pedicure 
        id={single.id}
        key={single.id}
        image={single.img}
        />
    )
}


function Gallery() {
    return (
        // Gallery section design

        <section className="gallery" id="gallery">
            <h2 className="heading">Gallery</h2>
            <h3>Men <span>Section</span></h3>

             {/* Men Gallery layout */}

            {menPhotos.map(displayMen)}

            {/* Women Gallery layout */}

            <div className="adjust-container">
                <h3>Women <span>Section</span></h3>

                {womenPhotos.map(displayWomen)}
            </div>

            {/* Pedicure Gallery layout */}

            <div className="adjust-container">
                <h3>Pedicure & <span>Manicure</span></h3>

                {pedicurePhotos.map(displayPedicure)}
            </div>
        </section>
    )
}

export default Gallery;