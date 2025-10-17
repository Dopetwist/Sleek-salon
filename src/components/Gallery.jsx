
import Men from "./Men";
import Women from "./Women";
import Pedicure from "./Pedicure";



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