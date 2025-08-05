import React from "react";
import { pedicurePhotos } from "../../index.js";

function Pedicure() {
    return (
        <div className="adjust-container">
            <h3>Pedicure & <span>Manicure</span></h3>
            
            <div className="gallery-content ped-margin">
                {pedicurePhotos.map((item) => (
                    <div className="gallery-box">
                        <img key={item.id} src={item.img} alt="Pedicure Image" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pedicure;