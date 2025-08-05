import React from "react";
import { menPhotos } from "../../index.js";

function Men() {
    return (
        <div className="gallery-content">
            {menPhotos.map((item) => (
                <div className="gallery-box">
                    <img key={item.id} src={item.img} alt="Men Hair Photo" />
                </div>
            ))}
        </div>
    )
}

export default Men;