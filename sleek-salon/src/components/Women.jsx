import React from "react";
import { womenPhotos } from "../../index.js";

function Women() {
    return (
        <div className="adjust-container">
            <h3>Women <span>Section</span></h3>
            
            <div className="gallery-content">
                {womenPhotos.map((item) => (
                    <div className="gallery-box" key={item.id}>
                        <img src={item.img} alt="Women Hair Photo" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Women;