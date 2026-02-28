import { menPhotos } from "../components/GalleryPhotos";

function Men() {
    return (
        // Display all men photos
        
        <div className="gallery-content">
            {menPhotos.map((item) => (
                <div className="gallery-box" key={item.id}>
                    <img src={item.img} alt="Men Hair Photo" />
                </div>
            ))}
        </div>
    )
}

export default Men;