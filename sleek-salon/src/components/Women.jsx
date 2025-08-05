import React from "react";
import { womenPhotos } from "../../index.js";

function Women() {
    return (
        <div className="adjust-container">
            <h3>Women <span>Section</span></h3>
            
            <div className="gallery-content">
                {womenPhotos.map((item) => (
                    <div className="gallery-box">
                        <img key={item.id} src={item.img} alt="Women Hair Photo" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Women;